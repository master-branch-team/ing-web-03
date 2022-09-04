import prisma from '@config/prisma';
import { Resolver } from 'types';

const LikeResolvers: Resolver = {
  Like: {
    users: async (parent, args) => {
      const users = await prisma.user.findUnique({
        where: {
          id: parent.user_id,
        },
      });
      return users;
    },

    notes: async (parent, args) => {
      const notes = await prisma.note.findUnique({
        where: {
          id: parent.note_id,
        },
      });
      return notes;
    },
  },
  Query: {
    getLike: async (parent, args) => {
      const like = await prisma.like.findUnique({
        where: {
          id: args.id,
        },
      });
      return like;
    },
    getlikes: async (parent, args) => {
      const likes = await prisma.like.findMany();
      return likes;
    },
  },
  Mutation: {
    createLike: async (parent, args) => {
      const newLike = await prisma.like.create({
        data: {
          user: {
            connect: {
              id: args.data.user_id,
            },
          },
          note: {
            connect: {
              id: args.data.note_id,
            },
          },
        },
      });
      return newLike;
    },
    deleteLike: async (parent, args) => {
      const deletedLike = await prisma.like.delete({
        where: {
          id: args.id,
        },
      });
      return deletedLike;
    },
  },
};
export { LikeResolvers };
