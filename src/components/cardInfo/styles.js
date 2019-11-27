import styled from 'styled-components';

export const CardInfo = styled.p`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  height: 100vh;
  width: ${props => props.width};
  justify-content: center;
  padding: 40px;
  box-shadow: 3px 3px 3px #ececec;
  color: #909090;
  text-align: justify;
  text-justify: inter-character;
  line-height: 1.6;
  font-size: 15px;

  p {
    text-align: justify;
    text-justify: inter-character;
    line-height: 2;
    height: 100vh;
  }
`;
