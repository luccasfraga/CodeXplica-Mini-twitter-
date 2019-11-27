import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container, Content, Result } from './styles';
import ImgUser from '../../images/icon_user.png';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Subtitle from '../../components/subtitle';
import Message from '../../text-steps.json';

const Step3 = props => {
  const [disabled, setDisabled] = useState(true);
  const [editorValue, setEditorValue] = useState('');

  function handleClick() {
    props.history.push('/step04');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="30%" background="#f9f9f9" text={Message.step03} />

        <Content>
          <Subtitle
            text="Copie o codigo ao lado para você ir para o próximo nível."
            margin="0 0 30px"
            align="left;"
            color="#333"
          />
          <div>
            <CodeEditor
              mode="html"
              compareValue="<div>
<img src='profile.jpg' />
<textarea
placeholder='Twitte algo aqui!'>
</textarea>
<button placeholder='O que está acontecendo?'>
Tweetar
</button>
</div>"
              handleDisabled={() => setDisabled(false)}
              handleEnabled={() => setDisabled(true)}
              value={editorValue}
              onChange={setEditorValue}
            />
            <CodeEditor
              mode="html"
              readOnly
              value="<div>
<img src='profile.jpg' />
<textarea
placeholder='Twitte algo aqui!'>
</textarea>
<button placeholder='O que está acontecendo?'>
Tweetar
</button>
</div>"
            />
          </div>

          <Subtitle
            text="Resultado do código abaixo:"
            margin="30px 0 30px"
            align="left;"
            color="#333"
          />

          <Result>
            <div>
              <img style={{ width: '50px' }} src={ImgUser} />
              <textarea placeholder="Twitte algo aqui!" />
              <button placeholder="O que está acontecendo?">Tweetar</button>
            </div>
          </Result>

          <Button onClick={handleClick} text="Avançar <3" disabled={disabled} />
        </Content>
      </Container>
    </>
  );
};

Step3.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step3;
