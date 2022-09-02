import { gql } from 'apollo-server-micro';

const NoteTypes = gql`
  type Note {
    id: ID
    text: String
    user: User
    course: Course
    likes: [Like]
  }

  input NoteCreateInput {
    user_id: String!
    course_id: String!
    text: String!
  }

  input NoteUpdateInput {
    user_id: String
    course_id: String
    text: String
  }

  type Query {
    getNote(id: String): Note
    getNotes: [Note]
  }

  type Mutation {
    createNote(data: NoteCreateInput): Note
    updateNote(id: String, data: NoteUpdateInput): Note
    deleteNote(id: String): Note
  }
`;

export { NoteTypes };
