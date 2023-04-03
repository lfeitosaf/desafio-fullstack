import * as yup from 'yup';

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  telefone: yup.string().required('Número de telefone obrigatório'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(4, 'A senha precisa ter no mínimo 4 dígitos'),
  passwordConfirmation: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});
