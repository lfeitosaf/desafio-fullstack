import { api } from './api';

export interface iUserRegister {
  name: string;
  email: string;
  telefone: string;
  password: string;
  passwordConfirmation: string;
}

export const register = async (body: iUserRegister) => {
  const { data } = await api.post('/users/', body);
  return data;
};
