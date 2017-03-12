/* @flow */

const resolvers = {
  Query: {
    say() {
      return 'hello apollo';
    },
  },
};

export default resolvers;
