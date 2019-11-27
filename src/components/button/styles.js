import styled from 'styled-components';

export const BoxButton = styled.button`
  display: flex;
  margin: ${props => props.margin};
  background: #ff7d0d;
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  width: ${props => props.width};
  cursor: pointer;
  z-index: 1;
  position: relative;
  font-size: ${props => props.size};
  font-family: inherit;
  color: white;
  outline: none;
  border: none;
  overflow: hidden;
  text-transform: uppercase;

  &::after {
    content: '';
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  &:hover::after {
    transition: transform 0.6s ease-in-out;
    transform: translate3d(1500%, 0, 0) rotate(35deg);
  }

  &:disabled,
  &.disabled {
    background: #c1c1c1;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  margin: 0 auto;
  font-weight: bold;
`;
