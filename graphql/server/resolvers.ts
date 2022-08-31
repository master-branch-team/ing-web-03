import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { UserResolvers } from '@graphql/server/user/resolvers';

const GlobalResolvers: Resolver[] = [
  UserResolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
];

export { GlobalResolvers };
