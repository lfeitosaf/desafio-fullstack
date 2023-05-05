import styled from 'styled-components';

export const ErrorMessage = styled.span`
  font-weight: 600;
  height: 0px;
  font-size: 12px;
  background: none;
  color: ${({ theme }) => theme.colors.brand.primary};
`;
