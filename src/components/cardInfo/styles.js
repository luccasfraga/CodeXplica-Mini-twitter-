import styled from 'styled-components';

export const CardInfo = styled.div`
  display: flex;
  background-color: ${props => props.background};
  height: 100vh;
  /* width:400px; */
  width:${props => props.width};
  justify-content: center;
  padding: 40px;
`;

export const Text = styled.p`
  color: '#d1d1';
  margin: '0 auto'
`;
