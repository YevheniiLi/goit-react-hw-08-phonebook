import styled from 'styled-components';

export const ContactText = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-right: ${p => p.theme.space[4]}px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[5]}px;
`;
