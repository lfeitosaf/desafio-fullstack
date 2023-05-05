import { LoginContainer, ButtonRegister as Link } from './Login.style';
import { Button } from '../../components/Button';
import { MainContainer } from '../../components/MainContainer';
import { Form } from '../../components/FormLogin';
import { Title } from '../../components/Title';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ButtonRegister } from '../../components/ButtonRegister';
import { loginSchema } from '../../validation/login';
import { useUserContext } from '../../hooks/userUserContext';
import { iUserLogin } from '../../services/login';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: yupResolver(loginSchema) });
  const { userLogin } = useUserContext();

  const submit = (formData: iUserLogin) => {
    userLogin(formData);
    reset();
  };

  return (
    <MainContainer>
      <LoginContainer>
        <Form onSubmit={handleSubmit(submit)}>
          <Title>Faça seu login</Title>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' {...register('email')} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label htmlFor='password'>Senha</Label>
          <Input id='password' type='password' {...register('password')} />
          <Button type='submit'>Entrar</Button>
          <Link to='/register'>
            <ButtonRegister>Cadastre-se</ButtonRegister>
          </Link>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
