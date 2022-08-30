import prisma from '@config/prisma';
import { Resolver } from 'types';

const UserTypeResolvers: Resolver = {
  USER_TYPE: {
    users: async (parent, args) => {
      const users = await prisma.uSER.findMany({
        where: {
          user_type_id: {
            equals: parent.id,
          },
        },
      });
      return users;
    },
  },
  Query: {},
  Mutation: {},
};

// User: {
//   transactions: async (parent, args) => {
//     const transactions = await prisma.transaction.findMany({
//       where: {
//         userId: {
//           equals: parent.id,
//         },
//       },
//     });
//     return transactions;
//   },
// },
export { UserTypeResolvers };
