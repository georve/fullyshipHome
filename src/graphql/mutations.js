/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvestor = /* GraphQL */ `
  mutation CreateInvestor(
    $input: CreateInvestorInput!
    $condition: ModelInvestorConditionInput
  ) {
    createInvestor(input: $input, condition: $condition) {
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
export const updateInvestor = /* GraphQL */ `
  mutation UpdateInvestor(
    $input: UpdateInvestorInput!
    $condition: ModelInvestorConditionInput
  ) {
    updateInvestor(input: $input, condition: $condition) {
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
export const deleteInvestor = /* GraphQL */ `
  mutation DeleteInvestor(
    $input: DeleteInvestorInput!
    $condition: ModelInvestorConditionInput
  ) {
    deleteInvestor(input: $input, condition: $condition) {
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
