import prisma from '@config/prisma';
import { Resolver } from 'types';

const CommentResolvers: Resolver = {
  Comment: {
    users: async (parent, args) => {
      const users = await prisma.user.findUnique({
        where: {
          id: parent.user_id,
        },
      });
      return users;
    },

    trainings: async (parent, args) => {
      const trainings = await prisma.training.findUnique({
        where: {
          id: parent.training_id,
        },
      });
      return trainings;
    },
  },
  Query: {
    getComment: async (parent, args) => {
      const comment = await prisma.comment.findUnique({
        where: {
          id: args.id,
        },
      });
      return comment;
    },
    getComments: async (parent, args) => {
      const comments = await prisma.comment.findMany();
      return comments;
    },
  },
  Mutation: {
    createComment: async (parent, args) => {
      const newComment = await prisma.comment.create({
        data: {
          text: args.data.text,
          user: {
            connect: {
              id: args.data.user_id,
            },
          },
          trainig: {
            connect: {
              id: args.data.training_id,
            },
          },
        },
      });
      return newComment;
    },
    updateComment: async (parent, args) => {
      const updatedComment = await prisma.comment.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      });
      return updatedComment;
    },
    deleteComment: async (parent, args) => {
      const deletedComment = await prisma.comment.delete({
        where: {
          id: args.id,
        },
      });
      return deletedComment;
    },
  },
};
export { CommentResolvers };
