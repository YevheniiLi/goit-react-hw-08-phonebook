import styled from 'styled-components';

export const InputFilter = styled.input`
  height: 30px;
  width: 200px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  margin-bottom: ${p => p.theme.space[4]}px;
  :focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;
