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

  type Query {
    getUser(id: String): User
    getAllUsers: [User]
  }
  type Mutation {
    
  }
`;

export { UserTypes };
