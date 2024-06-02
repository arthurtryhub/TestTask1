import faker from 'faker';


export const getUserData = () => {
  return {
    username: faker.name.firstName(5),
    password: faker.internet.password(8),
  };
};