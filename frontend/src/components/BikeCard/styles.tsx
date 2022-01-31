import styled from 'styled-components';

export const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  border: 2px solid #E7E7E7;
  font-size: 0.9em;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 1.5em;

  > :first-child {
    padding: 1em 2em;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  background-color: #E9EAEE;
  height: 100%;
  
  label {
    display: flex;
    flex-direction: column;
    background-color: inherit;
  }
`;
