import styled from 'styled-components';
import { Colors } from '../../../types';

type Props = {
  color: keyof Colors;
}

const colors: Partial<Colors> = {
  green: '#28bc9c',
  red: '#f8343c',
  blue: '#3458c4',
};

const StyledButton = styled.button`
  color: #FFFFFF;
  background-color: ${(props: Props) => (props.color ? colors[props.color] : 'white')};
  border: none;
  border-radius: 5px;
  width: 7rem;

  :disabled {
    background-color: #868a96;
    color: #c8c9cc;
  }
`;

export default StyledButton;
