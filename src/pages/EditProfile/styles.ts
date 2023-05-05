import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  background: ${({ theme }) => theme.colors.grey.grey4};
  box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 33px 17px;
  gap: 15px;
  margin: 0 auto;
  @media (min-width: 360px) {
    width: 370px;
  }
`;
