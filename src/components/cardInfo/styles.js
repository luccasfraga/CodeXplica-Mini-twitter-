import styled from 'styled-components';

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  width: ${props => props.width};
  justify-content: center;
  padding: 40px;
  box-shadow: 3px 3px 3px #ececec;
  justify-content: flex-start;
  overflow-y: auto;
  height: 90vh;

  p {
    text-align: justify;
    text-justify: inter-character;
    line-height: 2;
    color: #909090;
    font-size: 15px;
  }
`;
