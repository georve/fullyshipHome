/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvestor = /* GraphQL */ `
  query GetInvestor($id: ID!) {
    getInvestor(id: $id) {
      id
      name
      email
      phone
      description
      createdAt
      updatedAt
    }
  }
`;
export const listInvestors = /* GraphQL */ `
  query ListInvestors(
    $filter: ModelInvestorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvestors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
