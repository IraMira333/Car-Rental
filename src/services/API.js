import axios from 'axios';

export const $carsMockapi = axios.create({
  baseURL: 'https://64ca4e55700d50e3c704af47.mockapi.io/contacts/',
});

export const getCarsAPI = async ({ limit = 12, ...other }) => {
  const response = await $carsMockapi.get('/cars', {
    params: { limit, ...other },
  });

  return response.data;
};
