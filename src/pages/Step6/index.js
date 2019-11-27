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

const Step6 = props => {
  const [disabled, setDisabled] = useState(true);
  const [editorValue, setEditorValue] = useState('');

  function handleClick() {
    props.history.push('/step07');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="50%" background="#f9f9f9" text={Message.step06} />

        <Content>
          <Subtitle
            text="Copie o codigo ao lado para você ir para o próximo nível."
            margin="0 0 30px"
            align="left;"
          />
          <div>
            <CodeEditor
              mode="css"
              compareValue="div {
width: 100%;
display:flex;
flex-direction: column;
}

b {
display: block;
margin-bottom: 20px;
}"
              handleDisabled={() => setDisabled(false)}
              handleEnabled={() => setDisabled(true)}
              value={editorValue}
              onChange={setEditorValue}
            />
            <CodeEditor
              mode="css"
              readOnly
              value="div {
width: 100%;
display:flex;
flex-direction: column;
}

b {
display: block;
margin-bottom: 20px;
}"
            />
          </div>

          <Subtitle
            text="Resultado do código abaixo:"
            margin="30px 0 30px"
            align="left;"
          />

          <Result>
            <PostTw fake />
          </Result>

          <Button onClick={handleClick} text="Avançar <3" disabled={disabled} />
        </Content>
      </Container>
    </>
  );
};

Step6.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step6;
