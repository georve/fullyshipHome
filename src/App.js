import React,{useState,useEffect} from 'react';
import "./App.css";
import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

import { listInvestors } from "./graphql/queries";
import {
  createInvestor as createInvestorMutation,
  deleteInvestor as deleteInvestorMutation,
} from "./graphql/mutations";

function App({ signOut }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchInvestors();
  }, []);

  async function fetchInvestors() {
    const apiData = await API.graphql({ query: listInvestors });
    const notesFromAPI = apiData.data.listInvestors.items;
    setNotes(notesFromAPI);
  }

  async function createInvestor(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      email: form.get('email'),
      phone: form.get('phone'),
      description: form.get("description"),
    };
    await API.graphql({
      query: createInvestorMutation,
      variables: { input: data },
    });
    fetchInvestors();
    event.target.reset();
  }

  async function deleteInvestor({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteInvestorMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createInvestor}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Investor Name"
            label="Investor Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="email"
            placeholder="Investor Email"
            label="Investor Email"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="phone"
            placeholder="Investor Phone"
            label="Investor Phone"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Investor
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Investor</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteInvestor(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);