import prisma from '@config/prisma';
import { Resolver } from 'types';

const CourseStateResolvers: Resolver = {
  CourseState: {},
  Query: {
    getCourseState: async (parent, args) => {
      const courseState = await prisma.courseState.findUnique({
        where: {
          id: args.id,
        },
      });
      return courseState;
    },
    getCourseStates: async () => {
      const courseStates = await prisma.courseState.findMany();
      return courseStates;
    },
  },
  Mutation: {
    createCourseState: async (parent, args) => {
      const newCourseState = await prisma.courseState.create({
        data: {
          ...args.data,
        },
      });
      return newCourseState;
    },
    updateCourseState: async (parent, args) => {
      const updatedCourseState = await prisma.courseState.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      });
      return updatedCourseState;
    },
    deleteCourseState: async (parent, args) => {
      const deletedCourseState = await prisma.courseState.delete({
        where: {
          id: args.id,
        },
      });

      return deletedCourseState;
    },
  },
};

export { CourseStateResolvers };
