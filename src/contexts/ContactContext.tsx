import { createContext, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { IContact } from '../services/contact';
import { useUserContext } from '../hooks/userUserContext';
import { api } from '../services/api';
import { IContacts } from './UserContext';
import { useNavigate } from 'react-router-dom';

interface iContactProviderProps {
  children: ReactNode;
}

export interface iContactContext {
  deleteContact(id: string): void;
  userContact(data: IContact): void;
  loadContacts(): void;
  editContact(data: any, id: string): void;
}

export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const { setContactModal, contacts, setContacts } = useUserContext();
  const token = localStorage.getItem('@user: token');
  const navigate = useNavigate();

  const loadContacts = async () => {
    try {
      const response = await api.get<IContacts[]>('/contacts');
      const contacts = response.data;
      setContacts(contacts);
    } catch (error) {
      console.log(error);
    }
  };
  const userContact = async (formData: IContact) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.post('/contacts', formData);
      setContacts([...contacts, data]);
      toast.success('Cadastro realizado com sucesso!');
      setContactModal(true);
    } catch (error) {
      toast.error('Erro ao realizar cadastro');
    }
    setContactModal(false);
  };

  const editContact = async (formData: any, id: string) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.patch(`/contacts/${id}`, formData);
      setContacts([...contacts.filter((contact) => contact.id !== id), data]);
      toast.success('Contato atualizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao atualizar contato');
    }
  };

  async function deleteContact(id: string) {
    api.defaults.headers.authorization = `Bearer ${token}`;

    await api.delete(`/contacts/${id}`).then((res) => {
      toast.success('Contato apagado com sucesso');
    });
  }

  return (
    <ContactContext.Provider
      value={{ userContact, editContact, deleteContact, loadContacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};
