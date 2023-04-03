import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  gap: 16px;
  width: 100%;
  height: 416px;
  background: var(--Gray-3);
  border-radius: 4px;
  overflow-y: auto;
  @media (min-width: 1080px) {
    padding: 19px 22px;
  }
`;
