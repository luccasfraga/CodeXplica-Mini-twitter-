import styled from 'styled-components';

export const Content = styled.div`
  overflow: auto;
  width: 100%;
`;

export const PostTw = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  justify-content: center;
  padding: 0 30px;
  border-bottom: 1px solid #c1c1c1;

  b {
    margin-bottom: 7px;
    display: block;
  }
`;
