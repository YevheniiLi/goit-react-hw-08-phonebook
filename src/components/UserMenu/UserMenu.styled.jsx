import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 16px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  margin-right: 20px;
`;

export const UserButton = styled.button`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  border: none;
  border-radius: ${p => p.theme.radii.lg};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  width: 85px;
  height: ${p => p.theme.space[5]}px;
`;
