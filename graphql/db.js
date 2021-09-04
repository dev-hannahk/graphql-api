export const people = [
  {
    id: "1",
    name: "Hannah",
    age: 20,
    gender: "female",
  },
  {
    id: "2",
    name: "Jenna",
    age: 20,
    gender: "female",
  },
  {
    id: "3",
    name: "Alice",
    age: 20,
    gender: "female",
  },
  {
    id: "4",
    name: "Jean",
    age: 20,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
