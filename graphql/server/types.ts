import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { CourseTypes } from '@graphql/server/course/types';
import { model1Types } from '@graphql/server/model1/types';
import { TrainingTypes } from '@graphql/server/training/types';
import { UserTypes } from '@graphql/server/user/types';

const CommonTypes = gql`
  scalar Date
`;

const GlobalTypes: DocumentNode[] = [
  CommonTypes,
  CourseTypes,
  TrainingTypes,
  UserTypes,
  model1Types,
  model1Types,
  model1Types,
];

export { GlobalTypes };
