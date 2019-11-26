import styled from 'styled-components';

export const BoxButton = styled.a`
  display: flex;
  margin: ${props => props.margin};
  background-color: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${ props => props.borderRadius};
  padding: 10px 10px;
  width:  ${ props => props.width};
  cursor: pointer;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  text-transform: uppercase;


&:hover {
  cursor: pointer;
}

&::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid #3FBFBF;
  transform-origin: center;
  transform: scale(1);
    }

  &:hover::before {
  transition: all 0.75s ease-in-out;
  transform-origin: center;
  transform: scale(1.75);
  opacity: 0;
}
`;

export const Text = styled.p`
  color: #ffffff;
  margin: 0 auto;
  font-weight: bold;

`;
