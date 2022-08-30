import {gql} from 'apollo-server-micro';

const CommentTypes = gql`
    type Comment {
        id: ID
        text: String
    }
    input CommentCreateInput {
        text: String
    }
    input CommentUpdateInput {
        text: String
    }

    type Query {
        getComment(id: string): Comment
        getComments: [Comment]
    }
    type Mutation {
        createComment(data: CommentCreateInput): Comment
        updateComment(id: string, data: CommentUpdateInput): Comment
        deleteComment(id: string): Comment

`;
export {CommentTypes};