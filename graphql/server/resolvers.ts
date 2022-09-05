import { Resolver } from 'types';
import { CourseResolvers } from '@graphql/server/course/resolvers';
import { TrainingResolvers } from '@graphql/server/training/resolvers';
import { UserTypeResolvers } from '@graphql/server/userType/resolvers';
import { UserResolvers } from '@graphql/server/user/resolvers';
import { NoteResolvers } from '@graphql/server/note/resolvers';
import { CommentResolvers } from '@graphql/server/comment/resolvers';
import { LikeResolvers } from '@graphql/server/like/resolvers';

const GlobalResolvers: Resolver[] = [
  CourseResolvers,
  TrainingResolvers,
  UserTypeResolvers,
  UserResolvers,
  NoteResolvers,
  CommentResolvers,
  LikeResolvers,
];

export { GlobalResolvers };
