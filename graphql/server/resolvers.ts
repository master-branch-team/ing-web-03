import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { TrainingResolvers } from '@graphql/server/training/resolvers';

const GlobalResolvers: Resolver[] = [model1Resolvers, TrainingResolvers];

export { GlobalResolvers };
