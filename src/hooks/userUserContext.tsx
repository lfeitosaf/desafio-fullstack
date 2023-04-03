import { useContext } from 'react';
import { UserContext, iUserContext } from '../contexts/UserContext';

export const useUserContext: () => iUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('Context not found');
  }

  return context;
};
