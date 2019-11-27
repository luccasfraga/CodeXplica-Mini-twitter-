import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  background-color: #fff;
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
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Result = styled.div`
  width: 100%;
  box-shadow: 0px 1px 3px 0px #c1c1c1;
  padding: 30px;
  margin: 30px 0;
`;
