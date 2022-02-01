import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 2em;
  height: 2.5rem;
  margin: 1.7em 0 1em 0;
  
  font-size: 0.6em;
  background: inherit;

  > label {
    display: flex;
    flex-direction: column;

    background: inherit;
  }

  span {
    position: absolute;
    top: -1.5em;
  }
`;

export default FormStyle;
