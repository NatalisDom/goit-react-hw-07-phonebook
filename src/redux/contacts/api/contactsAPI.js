import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://644ace08a8370fb321584c8a.mockapi.io/contacts',
});

export const getContacts = async () => {
  const response = await instance.get('/');

  return response.data;
};

export const addContact = async user => {
  const { data } = await instance.post('/', user);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/${id}`);
  
  return data;
};