import { createContext, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { IContactRegister } from '../services/contact';
import { useUserContext } from '../hooks/userUserContext';
import { api } from '../services/api';
import { IContacts } from './UserContext';

interface iContactProviderProps {
  children: ReactNode;
}

export interface iContactContext {
  deleteContact(id: string): void;
  userContact(data: IContactRegister): void;
  loadContacts(): void;
}

export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const { setModal, setLoading, contacts, setContacts, user, isAuthenticated } =
    useUserContext();
  const token = localStorage.getItem('@user: token');

  const loadContacts = async () => {
    try {
      const response = await api.get<IContacts[]>('/contacts');
      const contacts = response.data;
      setContacts(contacts);
    } catch (error) {
      console.log(error);
    }
  };
  const userContact = async (formData: IContactRegister) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.post('/contacts', formData);
      setContacts([...contacts, data]);
      toast.success('Cadastro realizado com sucesso!');
      setModal(true);
    } catch (error) {
      toast.error('Erro ao realizar cadastro');
    }
    setModal(false);
  };

  async function deleteContact(id: string) {
    api.defaults.headers.authorization = `Bearer ${token}`;

    await api.delete(`/contacts/${id}`).then((res) => {
      toast.success('Contato apagado com sucesso');
    });
  }

  return (
    <ContactContext.Provider
      value={{ userContact, deleteContact, loadContacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};
