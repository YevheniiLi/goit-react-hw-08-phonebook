import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const Phonebook = styled.div`
  background-color: ${p => p.theme.colors.sub};
  display: grid;
  flex-direction: column;
  justify-items: center;
  border-radius: ${p => p.theme.radii.lg};
  max-width: 300px;
  margin: auto;
  margin-top: 50px;
  padding: 13px;
  border: 1px solid rgba(0, 0, 0, 0.7);

  &:hover {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.7);
  }
`;


export const ButtonForm = styled.button`
  cursor: pointer;
  max-width: 120px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px 7px;
  border: 1px solid silver;
  border-radius: 5px;
  font-size: 14px;
  text-transform: capitalize;
  background-color: ${p => p.theme.colors.muted};

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  transition: border-color 1200ms, background-color 1200ms;
  &:hover {
    border-color: rgb(118, 194, 197);
    background-color: ${p => p.theme.colors.lamp};
    box-shadow: 0px 0px 4px 0px rgba(118, 194, 197, 0.7);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(118, 194, 197, 0.7);
    -moz-box-shadow: 0px 0px 4px 0px rgba(118, 194, 197, 0.7);
    transition: border-color 600ms, background-color 600ms, box-shadow 600ms;
  }
`;
