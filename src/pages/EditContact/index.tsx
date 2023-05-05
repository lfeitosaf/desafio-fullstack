import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { IContact } from '../../services/contact';
import { contactSchemaRegister } from '../../validation/contact';
import { useContactContext } from '../../hooks/useContactContext';
import { MainContainer } from '../../components/MainContainer';
import { LoginContainer } from '../Login/Login.style';
import { Title } from '../Home/styles';
import { Form } from './styles';
import { Link, useParams } from 'react-router-dom';
import { ButtonBack } from '../../components/ButtonBack';

const EditModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(contactSchemaRegister),
  });
  const { editContact } = useContactContext();
  const { id } = useParams();

  const submit = (data: any) => {
    editContact(data, id!);
    reset();
  };
  return (
    <MainContainer>
      <LoginContainer>
        <Link to='/'>
          <ButtonBack>Voltar</ButtonBack>
        </Link>
        <Form onSubmit={handleSubmit(submit)}>
          <Title>Editar contato</Title>
          <Label htmlFor='name'>Nome</Label>
          <Input id='name' {...register('name')}></Input>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' {...register('email')}></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label htmlFor='telefone'>Telefone</Label>
          <Input id='telefone' type='number' {...register('telefone')}></Input>
          <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
          <Button type='submit'>Entrar</Button>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
};
export default EditModal;
