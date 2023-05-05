import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { contactSchemaRegister } from '../../validation/contact';
import { MainContainer } from '../../components/MainContainer';
import { LoginContainer } from '../Login/Login.style';
import { Title } from '../Home/styles';
import { Form } from './styles';
import { Link } from 'react-router-dom';
import { ButtonBack } from '../../components/ButtonBack';
import { iUserRegister } from '../../services/register';
import { useUserContext } from '../../hooks/userUserContext';

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(contactSchemaRegister),
  });
  const { userUpdate } = useUserContext();

  const submit = (data: any) => {
    userUpdate(data);
    reset();
  };
  return (
    <MainContainer>
      <LoginContainer>
        <Link to='/'>
          <ButtonBack>Voltar</ButtonBack>
        </Link>
        <Form onSubmit={handleSubmit(submit)}>
          <Title>Editar perfil</Title>
          <Label htmlFor='name'>Nome</Label>
          <Input id='name' {...register('name')}></Input>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' {...register('email')}></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label htmlFor='telefone'>Telefone</Label>
          <Input id='telefone' type='number' {...register('telefone')}></Input>
          <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
          <Label htmlFor='telefone'>Senha</Label>
          <Input
            id='password'
            type='password'
            {...register('password')}
          ></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type='submit'>Entrar</Button>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
};
export default EditProfile;
