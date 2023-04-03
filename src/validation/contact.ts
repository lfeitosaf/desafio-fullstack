import * as yup from 'yup';

export const contactSchemaRegister = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  telefone: yup.string().required('Número de telefone obrigatório'),
});
