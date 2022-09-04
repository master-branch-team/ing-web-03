import { Resolver } from 'types';
import { TrainingResolvers } from '@graphql/server/training/resolvers';
import { UserTypeResolvers } from '@graphql/server/userType/resolvers';
import { UserResolvers } from '@graphql/server/user/resolvers';
import { NoteResolvers } from '@graphql/server/note/resolvers';

const GlobalResolvers: Resolver[] = [
  TrainingResolvers,
  UserTypeResolvers,
  UserResolvers,
  NoteResolvers,
];

export { GlobalResolvers };
