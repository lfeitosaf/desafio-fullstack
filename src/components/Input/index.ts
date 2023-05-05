import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 13px;
  width: 100%;
  min-height: 38.5px;
  background: ${({ theme }) => theme.colors.grey.grey3};
  border: 1px solid ${({ theme }) => theme.colors.grey.grey4};
  border-radius: 3px;
  color: #fff;
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.brand.primary};
    color: #fff;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.grey.grey1};
  }
`;
