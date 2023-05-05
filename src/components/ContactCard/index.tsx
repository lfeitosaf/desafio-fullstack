import { useNavigate } from 'react-router-dom';
import { useContactContext } from '../../hooks/useContactContext';
import { useUserContext } from '../../hooks/userUserContext';
import EditModal from '../../pages/EditContact';
import {
  DivCard,
  Span,
  ContactCard,
  ContactTitle,
  DeleteCan,
  EditImg,
} from './styles';

interface iCardProps {
  name: string;
  email: string;
  id: string;
  telefone: string;
}

const Card = ({ name, email, id, telefone }: iCardProps) => {
  const { setContacts, contacts, editContactModal, setEditContactModal } =
    useUserContext();
  const { deleteContact } = useContactContext();
  const navigate = useNavigate();

  return (
    <>
      {editContactModal ? <EditModal /> : null}
      <ContactCard>
        <ContactTitle>{name}</ContactTitle>
        <DivCard>
          <Span>Email: {email}</Span>
          <Span>Número de telefone: {telefone}</Span>
          <EditImg
            src='../../../pen.png'
            onClick={() => navigate(`/contact/${id}`)}
          />
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
