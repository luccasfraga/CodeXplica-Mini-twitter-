import styled from 'styled-components';

export const TitleStyles = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  font-weight: bold;
  text-align: center;
  display: block;

  span {
    color: #ff7d0d;
  }
`;
