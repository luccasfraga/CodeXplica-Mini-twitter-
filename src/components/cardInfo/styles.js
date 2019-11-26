import styled from 'styled-components';

export const CardInfo = styled.div`
  display: flex;
  background-color: ${props => props.background};
  height: 100vh;
  /* width:400px; */
  width: ${props => props.width};
  justify-content: center;
  padding: 40px;
  box-shadow: 3px 3px 3px #ececec;
`;

export const Text = styled.p`
  color: #909090;
  text-align: left;
  line-height: 1.4;
  font-size: 15px;
`;
