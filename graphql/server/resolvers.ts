import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { UserTypeResolvers } from '@graphql/server/userType/resolvers';

const GlobalResolvers: Resolver[] = [
  UserTypeResolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
];

export { GlobalResolvers };
