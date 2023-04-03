import { RegisterContainer } from './Register.style';
import { Button } from '../../components/Button';
import { MainContainer } from '../../components/MainContainer';
import { Form } from '../../components/FormRegister';
import { Title } from '../../components/Title';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { RegisterTop } from '../../components/RegisterTop';
import { ButtonBack } from '../../components/ButtonBack';
import { ErrorMessage } from '../../components/ErrorMessage';
import { formSchemaRegister } from '../../validation/register';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { iUserRegister } from '../../services/register';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../hooks/userUserContext';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserRegister>({ resolver: yupResolver(formSchemaRegister) });
  const { userRegister } = useUserContext();

  const submit = (data: iUserRegister) => {
    userRegister(data);
    reset();
  };
  return (
    <MainContainer>
      <RegisterContainer>
        <RegisterTop>
          <Link to='/'>
            <ButtonBack>Voltar</ButtonBack>
          </Link>
        </RegisterTop>
        <Form onSubmit={handleSubmit(submit)}>
          <Title>Crie sua conta</Title>
          <Label htmlFor='nome'>Nome completo</Label>
          <Input
            id='name'
            placeholder='Digite seu nome completo'
            type='text'
            {...register('name')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            placeholder='Digite seu e-mail'
            type='email'
            {...register('email')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label htmlFor='email'>Telefone</Label>
          <Input
            id='telefone'
            placeholder='Digite seu telefone'
            type='number'
            {...register('telefone')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label htmlFor='password'>Senha</Label>
          <Input
            id='password'
            placeholder='Digite sua senha'
            type='password'
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label htmlFor='passwordConfirmation'>Confirmar senha</Label>
          <Input
            id='passwordConfirmation'
            placeholder='Digite novamente sua senha'
            type='password'
            {...register('passwordConfirmation')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Button type='submit'>Cadastrar</Button>
        </Form>
      </RegisterContainer>
    </MainContainer>
  );
};

export default Register;
