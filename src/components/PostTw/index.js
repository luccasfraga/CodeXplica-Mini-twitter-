import React from 'react';

import { PostTw, Content } from './styles';

const InputTw = ({ noFake }) => (
  <Content>
    {!noFake ? (
      <PostTw>
        <b>@nomedapessoa</b>
        <p>texto</p>
      </PostTw>
    ) : (
      <div>
        {localStorage.getItem('tw') &&
          JSON.parse(localStorage.getItem('tw')).map(item => (
            <PostTw key={item}>
              <b>@nomedapessoa</b>
              <p>{item}</p>
            </PostTw>
          ))}
      </div>
    )}
  </Content>
);

export default InputTw;
