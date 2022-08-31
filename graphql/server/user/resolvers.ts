import prisma from '@config/prisma';
import { Resolver } from 'types';

const UserResolvers: Resolver = {
  Query: {
    getUser: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
    getAllUsers: async (parent, args) => {
      const users = await prisma.user.findMany();
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await prisma.user.create({
        // data: {
        //   ...args.data,
        // },
        data: {
          email: args.data.email,
          full_name: args.data.full_name,
          phone: args.data.phone,
          address: args.data.address,
          photo_link: args.data.photo_link,
          position: {
            connect: {
              id: args.data.position_id,
            },
          },
          user_type: {
            connect: {
              id: args.data.user_type_id,
            },
          },
        },
      });
      return user;
    },
    updateUser: async (parent, args) => {},
    deleteUser: async (parent, args) => {},
  },
};

export { UserResolvers };
