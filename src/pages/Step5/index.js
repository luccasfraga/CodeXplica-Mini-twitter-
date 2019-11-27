import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container, Content, Result } from './styles';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Subtitle from '../../components/subtitle';
import Message from '../../text-steps.json';
import PostTw from '../../components/PostTw';

const Step5 = props => {
  const [disabled, setDisabled] = useState(true);
  const [editorValue, setEditorValue] = useState('');

  function handleClick() {
    props.history.push('/step06');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="30%" background="#f9f9f9" text={Message.step05} />

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
<b>@nomedapessoa</b>
<p>Texto</p>
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
<b>@nomedapessoa</b>
<p>Texto</p>
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
              <b>@nomedapessoa</b>
              <p>Texto</p>
            </div>
          </Result>

          <Button onClick={handleClick} text="Avançar <3" disabled={disabled} />
        </Content>
      </Container>
    </>
  );
};

Step5.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step5;
