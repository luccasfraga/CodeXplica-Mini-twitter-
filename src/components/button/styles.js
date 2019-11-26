import styled from 'styled-components';

export const BoxButton = styled.a`
  display: flex;
  margin: ${props => props.margin};
  background: rgba(63, 191, 191, 1);
  background: -moz-linear-gradient(
    left,
    rgba(63, 191, 191, 1) 0%,
    rgba(63, 190, 225, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(63, 191, 191, 1)),
    color-stop(100%, rgba(63, 190, 225, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(63, 191, 191, 1) 0%,
    rgba(63, 190, 225, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(63, 191, 191, 1) 0%,
    rgba(63, 190, 225, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(63, 191, 191, 1) 0%,
    rgba(63, 190, 225, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(63, 191, 191, 1) 0%,
    rgba(63, 190, 225, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fbfbf', endColorstr='#3fbee1', GradientType=1 );
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  padding: 16px;
  width: ${props => props.width};
  cursor: pointer;
  z-index: 1;
  position: relative;
  font-size: inherit;
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
    transform: translate3d(1000%, 0, 0) rotate(35deg);
    background: rgba(163, 240, 240, 1);
    background: -moz-linear-gradient(
      left,
      rgba(163, 240, 240, 1) 0%,
      rgba(44, 242, 232, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      right top,
      color-stop(0%, rgba(163, 240, 240, 1)),
      color-stop(100%, rgba(44, 242, 232, 1))
    );
    background: -webkit-linear-gradient(
      left,
      rgba(163, 240, 240, 1) 0%,
      rgba(44, 242, 232, 1) 100%
    );
    background: -o-linear-gradient(
      left,
      rgba(163, 240, 240, 1) 0%,
      rgba(44, 242, 232, 1) 100%
    );
    background: -ms-linear-gradient(
      left,
      rgba(163, 240, 240, 1) 0%,
      rgba(44, 242, 232, 1) 100%
    );
    background: linear-gradient(
      to right,
      rgba(163, 240, 240, 1) 0%,
      rgba(44, 242, 232, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3f0f0', endColorstr='#2cf2e8', GradientType=1 );
  }
`;

export const Text = styled.p`
  color: #ffffff;
  margin: 0 auto;
  font-weight: bold;
`;
