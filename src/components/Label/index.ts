import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey.grey1};
  background: ${({ theme }) => theme.colors.grey.grey3};
  margin-right: auto;
`;
