import React, { useState } from 'react';

import { BoxInputTw } from './styles';
import ImgUser from '../../images/icon_user.png';
import PostTw from '../PostTw';

const InputTw = () => {
  const [inputValue, setInputValue] = useState('');

  function handleClick() {
    const array = [inputValue];

    if (localStorage.getItem('tw')) {
      const val = JSON.parse(localStorage.getItem('tw'));
      val.push(inputValue);
      localStorage.setItem('tw', JSON.stringify(val));
      return setInputValue('');
    }

    localStorage.setItem('tw', JSON.stringify(array));
    return setInputValue('');
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <BoxInputTw>
        <div className="header">
          <img src={ImgUser} alt="" />
          <textarea
            type="text"
            placeholder="O que está acontecendo?"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        <div className="box-button">
          <button type="button" onClick={handleClick}>
            Tweetar
          </button>
        </div>
      </BoxInputTw>
      <PostTw />
    </>
  );
};

export default InputTw;
