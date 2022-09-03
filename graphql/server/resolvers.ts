import { Resolver } from 'types';
import { CourseResolvers } from '@graphql/server/course/resolvers';
import { TrainingResolvers } from '@graphql/server/training/resolvers';
import { UserTypeResolvers } from '@graphql/server/userType/resolvers';
import { UserResolvers } from '@graphql/server/user/resolvers';

const GlobalResolvers: Resolver[] = [
  CourseResolvers,
  TrainingResolvers,
  UserTypeResolvers,
  UserResolvers,
];

export { GlobalResolvers };
