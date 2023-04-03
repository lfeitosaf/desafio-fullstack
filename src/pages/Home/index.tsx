import { ButtonBack } from '../../components/ButtonBack';
import { ContactList } from '../../components/ContactList/styles';
import Card from '../../components/ContactCard';
import { useUserContext } from '../../hooks/userUserContext';
import {
  ButtonPlus,
  DivHeader,
  DivContact,
  Header,
  Menu,
  Nav,
  ContactContainer,
  ContactTitle,
  Title,
} from './styles';
import Modal from '../../components/Modal';

const HomePage = () => {
  const { user, contacts, userLogout, setModal, modal } = useUserContext();
  console.log(user);
  return (
    <>
      {modal ? <Modal /> : null}
      <Nav>
        <Menu>
          <Title>Desafio Fullstack</Title>
          <ButtonBack onClick={userLogout}>Sair</ButtonBack>
        </Menu>
      </Nav>
      <Header>
        <DivHeader>
          <Title>Olá, {user?.name}</Title>
        </DivHeader>
      </Header>
      <ContactContainer>
        <DivContact>
          <ContactTitle>Contatos</ContactTitle>
          <ButtonPlus
            src='../../../ButtonPlus.png'
            onClick={() => setModal(true)}
          />
        </DivContact>
        <ContactList>
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              telefone={contact.telefone}
            />
          ))}
        </ContactList>
      </ContactContainer>
    </>
  );
};

export default HomePage;
