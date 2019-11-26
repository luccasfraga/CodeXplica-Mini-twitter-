import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.background};
  height: 100vh;
`;
