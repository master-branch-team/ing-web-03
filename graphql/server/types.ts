import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { CourseTypes } from '@graphql/server/course/types';
import { model1Types } from '@graphql/server/model1/types';
import { TrainingTypes } from '@graphql/server/training/types';
import { NoteTypes } from '@graphql/server/note/types';
import { CommentTypes } from '@graphql/server/comment/types';
import { LikeTypes } from '@graphql/server/like/types';

const CommonTypes = gql`
  scalar Date
`;

const GlobalTypes: DocumentNode[] = [
  CommonTypes,
  CourseTypes,
  TrainingTypes,
  LikeTypes,
  model1Types,
  model1Types,
  NoteTypes,
  CommentTypes
];

export { GlobalTypes };
