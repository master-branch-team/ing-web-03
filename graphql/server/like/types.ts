import { gql } from 'apollo-server-micro';

const LikeTypes = gql`
  type Like {
    id: ID
    user: User
    note: Note
  }

  input LikeCreateInput {
    user_id: String!
    note_id: String!
  }

  input LikeUpdateInput {
    user_id: String
    note_id: String
  }

  type Query {
    getLike(id: String): Like
    getLikes: [Like]
  }

  type Mutation {
    createLike(data: LikeCreateInput): Like
    updateLike(data: LikeUpdateInput): Like
    deleteLike(id: String): Like
  }
`;

export { LikeTypes };
