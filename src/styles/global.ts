import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

button{
  cursor: pointer;
}

body{
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  background-attachment: fixed;
  background: #292929;

}
`;
