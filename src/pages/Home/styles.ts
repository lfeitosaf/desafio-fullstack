import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 12px;
  height: 75px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey.grey4};
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey.grey4};
`;

export const Menu = styled.div`
  background: ${({ theme }) => theme.colors.grey.grey4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1080px) {
    margin: 0px 230px;
  }
`;

export const Header = styled.header`
  display: flex;
  background: ${({ theme }) => theme.colors.grey.grey4};
  justify-content: center;
  flex-direction: column;
  height: 131px;
  width: 100%;
  padding: 12px;
  gap: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey.grey4};
  @media (min-width: 1080px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DivHeader = styled.div`
  background: ${({ theme }) => theme.colors.grey.grey4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1080px) {
    margin: 0px 230px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  background: ${({ theme }) => theme.colors.grey.grey4};
  color: white;
`;

export const Modulo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey.grey1};
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  gap: 16px;
  height: 416px;
  background: ${({ theme }) => theme.colors.grey.grey3};
  border-radius: 4px;
  @media (min-width: 1080px) {
    margin: 0px 230px;
  }
`;

export const ContactTitle = styled.h3`
  background: ${({ theme }) => theme.colors.grey.grey3};
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grey.grey1};
`;

export const DivContact = styled.div`
  background: ${({ theme }) => theme.colors.grey.grey3};
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ButtonPlus = styled.img`
  background: ${({ theme }) => theme.colors.grey.grey3};
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;
export const ButtonEdit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border-radius: 4px;
  width: 120px;
  min-height: 38px;
  :hover {
    background: ${({ theme }) => theme.colors.brand.secondary};
    border: 1.2182px solid ${({ theme }) => theme.colors.brand.secondary};
  }
`;
