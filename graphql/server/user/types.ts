import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID
    email: String
    full_name: String
    phone: String
    address: String
    photo_link: String
    position: Position
    user_type: UserType
    course_states: [CourseState]
    notes: [Note]
    comments: [Comment]
    likes: [Like]
    trainings: [Training]
  }

  input UserCreateInput {
    email: String!
    full_name: String!
    phone: String!
    address: String!
    photo_link: String!
    position_id: String! 
    user_type_id: String! 
  }

  input UserUpdateInput {
    #Falta por definir
  }

  type Query {
    getUser(id: String): User
    getAllUsers: [User]
  }
  type Mutation {
    createUser(data: UserCreateInput): User
    updateUser(id: String, data: UserUpdateInput): User
    deleteUser(id: String): User
  }
`;

export { UserTypes };
