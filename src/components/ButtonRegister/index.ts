import styled from 'styled-components';

export const ButtonRegister = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.brand.primary};
  background-color: ${({ theme }) => theme.colors.brand.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 4px;
  width: 100%;
  min-height: 38px;
  :hover {
    background: ${({ theme }) => theme.colors.brand.quartiary};
    border: 1.2182px solid ${({ theme }) => theme.colors.brand.quartiary};
  }
`;
