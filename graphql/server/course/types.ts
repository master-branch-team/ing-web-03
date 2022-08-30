import { gql } from 'apollo-server-micro';

const CourseTypes = gql`
  type Course {
    id: ID
    name: String
    duration: Int
    link: String
    trainings: [Training]
    course_states: [CourseState]
    notes: [Note]
  }

  input CourseCreateInput {
    name: String!
    duration: Int!
    link: String!
    trainings: [Training]
    course_states: [CourseState]
    notes: [Note]
  }

  input CourseUpdateInput {
    name: String
    duration: Int
    link: String
    trainings: [Training]
    course_states: [CourseState]
    notes: [Note]
  }

  type Query {
    getCourse(id: String): Course
    getAllCourses: [Course]
  }
  type Mutation {
    createCourse(data: CourseCreateInput): Course
    updateCourse(data: CourseUpdateInput): Course
    deleteCourse(id: String): Course
  }
`;

export { CourseTypes };
