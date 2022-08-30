import { gql } from 'apollo-server-micro';

const TrainingTypes = gql`
  type Training {
    id: ID
    name: String
    description: String
    courses: [COURSE]
    users: [USER]
    comments: [COMMENT]
  }

  input TrainingCreationInput {
    name: String
    description: String
  }

  type Query {
    getTrainings: [Training]
    getTraining(email: String): Training
  }

  type Mutation {
    createTraining(data: TrainingCreationInput): Training
    updateTraining(id: String, data: TrainingCreationInput): Training
    deleteTraining(id: String): Training
  }
`;

export { TrainingTypes };
