import React from 'react';

import { PostTw, Content } from './styles';

const InputTw = ({ fake }) => (
  <Content>
    {!fake && localStorage.getItem('tw') ? (
      JSON.parse(localStorage.getItem('tw')).map(item => (
        <PostTw key={item}>
          <b>@nomedapessoa</b>
          <p>{item}</p>
        </PostTw>
      ))
    ) : (
      <PostTw>
        <b>@nomedapessoa</b>
        <p>teste</p>
      </PostTw>
    )}
  </Content>
);

export default InputTw;
