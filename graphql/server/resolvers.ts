import { Resolver } from 'types';
import { TrainingResolvers } from '@graphql/server/training/resolvers';
import { UserTypeResolvers } from '@graphql/server/userType/resolvers';
import { UserResolvers } from '@graphql/server/user/resolvers';

const GlobalResolvers: Resolver[] = [
  TrainingResolvers,
  UserTypeResolvers,
  UserResolvers,
];

export { GlobalResolvers };
