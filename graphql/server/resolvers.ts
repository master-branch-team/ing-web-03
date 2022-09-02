import { Resolver } from 'types';
import { TrainingResolvers } from '@graphql/server/training/resolvers';

const GlobalResolvers: Resolver[] = [TrainingResolvers];

export { GlobalResolvers };
