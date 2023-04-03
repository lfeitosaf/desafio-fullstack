import styled from 'styled-components';

export const ContactCard = styled.li`
  width: 100%;
  height: 49px;
  color: ${({ theme }) => theme.colors.brand.quartiary};
  background: ${({ theme }) => theme.colors.grey.grey3};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  :hover {
    div,
    span,
    img,
    h4 {
      color: ${({ theme }) => theme.colors.grey.grey3};
      background: ${({ theme }) => theme.colors.grey.grey2};
    }
    cursor: pointer;
    background: ${({ theme }) => theme.colors.grey.grey2};
  }
`;

export const DivCard = styled.div`
  display: flex;
  gap: 40px;
  background: ${({ theme }) => theme.colors.grey.grey3};
  :hover {
    div {
      color: ${({ theme }) => theme.colors.grey.grey1};
    }
  }
`;

export const ContactTitle = styled.h4`
  background: none;
  height: 23px;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.brand.quartiary};
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.grey.grey3};
  line-height: 22px;
  text-align: right;
  color: ${({ theme }) => theme.colors.brand.quartiary};
`;
export const DeleteCan = styled.img`
  background: ${({ theme }) => theme.colors.grey.grey3};
  width: 20px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`;
