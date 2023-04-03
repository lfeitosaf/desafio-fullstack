import styled from 'styled-components';

export const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.grey.grey4};
  border: 1px solid ${({ theme }) => theme.colors.grey.grey4};
  border-radius: 4px;
  width: 67px;
  height: 38px;
  :hover {
    background: ${({ theme }) => theme.colors.grey.grey2};
    border: 1px solid ${({ theme }) => theme.colors.grey.grey2};
  }
`;
