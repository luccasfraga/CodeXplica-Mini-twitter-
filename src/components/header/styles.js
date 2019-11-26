import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  background-color: ${props => props.background};
  height: 50px;
`;

export const Text = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2em;
`;
