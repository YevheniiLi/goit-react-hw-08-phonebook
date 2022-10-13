import styled from 'styled-components';
import { Field } from 'formik';

export const FormButton = styled.button`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;
`;

export const FormInput = styled(Field)`
  height: 30px;
  width: 200px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  margin-right: ${p => p.theme.space[4]}px;
  :focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;
