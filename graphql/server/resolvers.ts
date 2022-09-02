import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { UserTypeResolvers } from '@graphql/server/userType/resolvers';
import { UserResolvers } from '@graphql/server/user/resolvers';

const GlobalResolvers: Resolver[] = [
  UserTypeResolvers,
  UserResolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
];

export { GlobalResolvers };
