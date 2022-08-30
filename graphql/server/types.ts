import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { CourseTypes } from '@graphql/server/course/types';

const CommonTypes = gql`
  scalar Date
`;

const GlobalTypes: DocumentNode[] = [
  CommonTypes,
  CourseTypes,
];

export { GlobalTypes };
