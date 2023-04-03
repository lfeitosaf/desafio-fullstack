import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width: 100%;
    inset: 0;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

const Loading = styled.span`
    display: block;
    width: 50px;
    border: 5px solid transparent;
    height: 50px;
    border-top: 5px solid ${({theme}) => theme.colors.brand.primary};
    animation: is-rotate 1s infinite ease-in-out;
    border-radius: 50%;
    @keyframes is-rotate {
      to {
        transform: rotate(1turn);
      } 
    }
`
export {Container, Loading};