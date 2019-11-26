import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  background: rgba(63,191,191,1);
  background: -moz-linear-gradient(left, rgba(63,191,191,1) 0%, rgba(63,190,225,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(63,191,191,1)), color-stop(100%, rgba(63,190,225,1)));
  background: -webkit-linear-gradient(left, rgba(63,191,191,1) 0%, rgba(63,190,225,1) 100%);
  background: -o-linear-gradient(left, rgba(63,191,191,1) 0%, rgba(63,190,225,1) 100%);
  background: -ms-linear-gradient(left, rgba(63,191,191,1) 0%, rgba(63,190,225,1) 100%);
  background: linear-gradient(to right, rgba(63,191,191,1) 0%, rgba(63,190,225,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fbfbf', endColorstr='#3fbee1', GradientType=1 );
  height: 90px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2em;
  cursor: pointer;
`;
