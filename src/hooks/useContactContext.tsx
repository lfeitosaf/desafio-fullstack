import { useContext } from 'react';
import { ContactContext, iContactContext } from '../contexts/ContactContext';

export const useContactContext: () => iContactContext = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw Error('Context not found');
  }

  return context;
};
