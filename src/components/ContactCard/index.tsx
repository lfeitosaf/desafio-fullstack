import { useContactContext } from '../../hooks/useContactContext';
import { useUserContext } from '../../hooks/userUserContext';
import { DivCard, Span, ContactCard, ContactTitle, DeleteCan } from './styles';

interface iCardProps {
  name: string;
  email: string;
  id: string;
  telefone: string;
}

const Card = ({ name, email, id, telefone }: iCardProps) => {
  const { setContacts, contacts } = useUserContext();
  const { deleteContact } = useContactContext();
  return (
    <>
      <ContactCard>
        <ContactTitle>{name}</ContactTitle>
        <DivCard>
          <Span>Email: {email}</Span>
          <Span>Número de telefone: {telefone}</Span>
          <DeleteCan
            src='../../../deletecan.png'
            alt=''
            onClick={() => handleDeleteContact(id)}
          />
        </DivCard>
      </ContactCard>
    </>
  );

  function handleDeleteContact(id: string) {
    deleteContact(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
  }
};

export default Card;
