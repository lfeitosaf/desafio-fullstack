import styled from 'styled-components';

export const ModalShadow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 17px 25px;
  position: absolute;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.grey.grey4};
  @media (min-width: 1080px) {
    margin: 0px 230px;
  }
`;

export const DivModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
  gap: 8px;
  width: 280px;
  height: 40px;
  background: ${({ theme }) => theme.colors.grey.grey4};
  border-radius: 4px 4px 0px 0px;
`;

export const TitleModal = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  background: ${({ theme }) => theme.colors.grey.grey4};

  color: ${({ theme }) => theme.colors.grey.grey1};
`;

export const X = styled.img`
  background: ${({ theme }) => theme.colors.grey.grey4};
  width: 11px;
  height: 11px;
  cursor: pointer;
`;

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 17px 25px;
  gap: 17px;
  width: 280px;
  background: ${({ theme }) => theme.colors.grey.grey4};
  border-radius: 0px 0px 4px 4px;
`;
