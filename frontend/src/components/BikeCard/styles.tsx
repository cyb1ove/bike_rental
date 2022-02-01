import styled from 'styled-components';
import { Colors } from '../../../types';

type Props = {
  color: keyof Colors;
}

const colors: Partial<Colors> = {
  white: '#FFFFFF',
  gray: '#f0ecec',
};

export const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 2.5rem;
  background: ${(props: Props) => (props.color ? colors[props.color] : 'white')};
  border: 2px solid #E6E6E6;
  font-size: 1.3em;
  border-radius: 3px;
  margin-bottom: 1.5em;
  padding: 0.7em 1.4em;
`;

export const TextContentStyle = styled.span`
  align-self: center;
  background-color: inherit;
`;

export const ControlPanelStyle = styled.span`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  background-color: inherit;
`;
