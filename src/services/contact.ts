import { iUserInfo } from '../contexts/UserContext';

export interface IContactRegister {
  name: string;
  email: string;
  telefone: string;
}

export interface IContactReturn {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  user: iUserInfo;
}
