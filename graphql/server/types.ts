import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { CourseTypes } from '@graphql/server/course/types';
import { TrainingTypes } from '@graphql/server/training/types';
import { NoteTypes } from '@graphql/server/note/types';
import { CommentTypes } from '@graphql/server/comment/types';
import { LikeTypes } from '@graphql/server/like/types';
import { PositionTypes } from '@graphql/server/position/types';
import { CourseStateTypes } from '@graphql/server/course-state/types';

const CommonTypes = gql`
  scalar Date
`;

const GlobalTypes: DocumentNode[] = [
  CommonTypes,
  CourseTypes,
  TrainingTypes,
  LikeTypes,
  NoteTypes,
  PositionTypes,
  CommentTypes,
  CourseStateTypes,
];

export { GlobalTypes };
