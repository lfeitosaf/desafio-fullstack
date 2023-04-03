import {
  DivBody,
  DivModal,
  Form,
  ModalShadow,
  Section,
  TitleModal,
  X,
} from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserContext } from '../../hooks/userUserContext';
import { Label } from '../Label';
import { Input } from '../Input';
import { ErrorMessage } from '../ErrorMessage';
import { Button } from '../Button';
import { IContactRegister } from '../../services/contact';
import { contactSchemaRegister } from '../../validation/contact';
import { useContactContext } from '../../hooks/useContactContext';

const Modal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactRegister>({
    resolver: yupResolver(contactSchemaRegister),
  });
  const { setModal } = useUserContext();
  const { userContact } = useContactContext();

  const submit = (data: IContactRegister) => {
    userContact(data);
    reset();
  };

  return (
    <ModalShadow>
      <Section>
        <Form onSubmit={handleSubmit(submit)}>
          <DivModal>
            <TitleModal>Cadastrar contato</TitleModal>
            <X
              src='../../X.png'
              onClick={() => {
                setModal(false);
              }}
            ></X>
          </DivModal>
          <DivBody>
            <Label htmlFor='name'>Nome</Label>
            <Input id='name' placeholder='Nome' {...register('name')}></Input>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='Email'
              type='email'
              {...register('email')}
            ></Input>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Label htmlFor='telefone'>Telefone</Label>
            <Input
              id='telefone'
              placeholder='Telefone'
              type='number'
              {...register('telefone')}
            ></Input>
            <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
          </DivBody>
          <Button type='submit'>Cadastrar contato</Button>
        </Form>
      </Section>
    </ModalShadow>
  );
};

export default Modal;
