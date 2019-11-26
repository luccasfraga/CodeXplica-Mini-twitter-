import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.background};
  height: 100vh;
  padding: 50px;

  color: #211f1f;
  text-align: left;
  line-height: 1.4;
  font-size: 15px;
`;
