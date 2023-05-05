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
import { IContact } from '../../services/contact';
import { contactSchemaRegister } from '../../validation/contact';
import { useContactContext } from '../../hooks/useContactContext';

const Modal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(contactSchemaRegister),
  });
  const { setContactModal } = useUserContext();
  const { userContact } = useContactContext();

  const submit = (data: IContact) => {
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
                setContactModal(false);
              }}
            ></X>
          </DivModal>
          <DivBody>
            <Label htmlFor='name'>Nome</Label>
            <Input id='name' {...register('name')}></Input>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' {...register('email')}></Input>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Label htmlFor='telefone'>Telefone</Label>
            <Input
              id='telefone'
              type='number'
              {...register('telefone')}
            ></Input>
            <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
            <Button type='submit'>Cadastrar contato</Button>
          </DivBody>
        </Form>
      </Section>
    </ModalShadow>
  );
};

export default Modal;
