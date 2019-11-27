import styled from 'styled-components';

export const BoxInputTw = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 5px solid #e6ecf0;

  .header {
    width: 100%;
    height: 84px;
    align-items: center;
    display: flex;
  }

  .box-button {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  img {
    border-radius: 50%;
    width: 45px;
  }

  textarea {
    border: 0;
    font-size: 16px;
    margin-left: 20px;
    width: 100%;
    resize: none;
    height: 50px;
    padding-top: 17px;
  }

  button {
    border: 0;
    background-color: rgb(29, 161, 242);
    padding: 12px 22px;
    border-radius: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;
