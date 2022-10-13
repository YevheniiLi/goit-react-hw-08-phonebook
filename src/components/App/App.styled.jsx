import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SiteNav = styled.nav`
  min-width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 2px solid ${p => p.theme.colors.accent};
`;

export const SiteLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 16px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  margin-left: 20px;
  margin-right: 20px;
  :not(:last-child) {
    margin-right: 20px;
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
