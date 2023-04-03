import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.grey.grey3};
`;
