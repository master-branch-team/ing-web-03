import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';

const GlobalResolvers: Resolver[] = [
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
  model1Resolvers,
];

export { GlobalResolvers };
