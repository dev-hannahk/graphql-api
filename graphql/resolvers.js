const hannah = {
  name: "Hannah",
  age: 20,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => hannah,
  },
};

export default resolvers;
