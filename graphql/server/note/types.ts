import {gql} from 'apollo-server-micro';

const NoteTypes = gql`
    type Note {
        id: ID
        text: String
        likes: [Like]
    }
    input NoteCreateInput {
        text: String

    }
    input NoteUpdateInput {
        text: String
    }
    type Query {
        getNote(id: string): Note
        getNotes: [Note]
    }
    type Mutation {
        createNote(data: NoteCreateInput): Note
        updateNote(id: string, data: NoteUpdateInput): Note
        deleteNote(id: string): Note

`;
export {NoteTypes};