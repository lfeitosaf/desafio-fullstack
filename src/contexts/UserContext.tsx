import { createContext, ReactNode, useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { iUserLogin } from '../services/login';
import { iUserRegister, register } from '../services/register';
import { useContactContext } from '../hooks/useContactContext';

export interface IContacts {
  id: string;
  name: string;
  email: string;
  telefone: string;
  user: iUser;
}

export interface iUserInfo {
  id: string;
  name: string;
  telefone: string;
  email: string;
  contacts: IContacts[];
}

export interface iUser {
  token: string;
  user: iUserInfo;
}

export interface iUserContext {
  user: iUserInfo | null;
  setUser: (data: iUserInfo) => void;
  userRegister(data: iUserRegister): void;
  userLogin(data: iUserLogin): void;
  userLogout(): void;
  contacts: IContacts[];
  setContacts: (data: IContacts[]) => void;
  loading: boolean;
  isAuthenticated: boolean;
  setLoading: (newState: boolean) => void;
  modal: boolean;
  setModal: (newState: boolean) => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<iUserContext | null>(null);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<iUserInfo | null>(null);
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { loadContacts } = useContactContext();
  const token = window.localStorage.getItem('@user: token');
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const token = localStorage.getItem('@user: token');

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get('/users/profile');
          setUser(data);
          setContacts(data.contacts);
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const userLogin = async (formData: iUserLogin) => {
    setLoading(true);
    try {
      const response = await api.post(`/login`, formData);
      toast.success('Login realizado com sucesso');
      localStorage.setItem('@user: token', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao realizar login');
    }
    setLoading(false);
  };

  const userRegister = async (formData: iUserRegister) => {
    try {
      const data = await register(formData);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      toast.error('Erro ao realizar cadastro');
      console.log(error);
    }
    setLoading(false);
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@user: token');
    navigate('/login');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        userLogout,
        contacts,
        setContacts,
        loading,
        setLoading,
        modal,
        setModal,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
