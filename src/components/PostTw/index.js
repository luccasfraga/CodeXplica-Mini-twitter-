import React from 'react';

import { PostTw, Content } from './styles';

const InputTw = () => (
  <Content>
    {localStorage.getItem('tw') &&
      JSON.parse(localStorage.getItem('tw')).map(item => (
        <PostTw key={item}>
          <b>@nomedapessoa</b>
          <p>{item}</p>
        </PostTw>
      ))}
  </Content>
);

export default InputTw;
