import { gql } from 'apollo-server-micro';

const UserTypeTypes = gql`
  type USER_TYPE {
    id: ID
    name: String
    users: [USER]
  }

  input UserTypeCreateInput {
    name: String
  }

  input UserTypeUpdateInput {
    id: String
    name: String
  }

  type Query {
    getUserType(id: String): USER_TYPE
    getAllUserTypes: [USER_TYPE]
  }
  type Mutation {
    createUserType(data: UserTypeCreateInput): USER_TYPE
    updateUserType(data: UserTypeUpdateInput): USER_TYPE
    # deleteUserType(id: String): USER_TYPE ----> No se implementa por conflictos de claves foráneas
  }
`;

export { UserTypeTypes };
