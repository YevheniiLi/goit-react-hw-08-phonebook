import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  li {
    list-style: none;
  }

  button {
  margin-top: 8px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  }

  button:hover,
  button:focus {
  background-color: #1976d2;
  color: #fff;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  &:hover,
  &:focus {
    color: white;
    background-color: #1976d2;
  }
  &.active {
    color: white;
    background-color: #1976d2;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  margin-top: 16px;
  font-weight: 700;
`;

export const Form = styled.form`
  width: 270px;
  padding: 8px;
`;

export const ContactsHeader = styled.h2`
  margin-top: 24px;
  margin-bottom: 8px;
`;
