import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.sizes.size1};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey.grey1}; ;
`;
