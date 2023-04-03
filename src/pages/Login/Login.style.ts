import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
  padding-bottom: 30px;
  color: black;
`;

export const ButtonRegister = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
  padding-bottom: 30px;
  color: black;
`;
