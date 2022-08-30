import { gql } from 'apollo-server-micro';

const UserTypeTypes = gql`
  type UserType {
    id: ID
    name: String
    users: [User]
  }

  input UserTypeCreateInput {
    name: String
  }

  input UserTypeUpdateInput {
    id: String
    name: String
  }

  type Query {
    getUserType(id: String): UserType
    getAllUserTypes: [UserType]
  }
  type Mutation {
    createUserType(data: UserTypeCreateInput): UserType
    updateUserType(data: UserTypeUpdateInput): UserType
    # deleteUserType(id: String): UserType ----> No se implementa por conflictos de claves foráneas
  }
`;

export { UserTypeTypes };
