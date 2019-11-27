import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container, Content, Result } from './styles';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Subtitle from '../../components/subtitle';
import Message from '../../text-steps.json';
import BoxInputTw from '../../components/InputTw';

const Step4 = props => {
  const [disabled, setDisabled] = useState(true);
  const [editorValue, setEditorValue] = useState('');

  function handleClick() {
    props.history.push('/step05');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="30%" background="#f9f9f9" text={Message.step04} />

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
}

img {
width: 45px;
border-radius: 50%;
}

textarea {
border: 0;
font-size: 18px;
margin-left: 20px;
}

button {
border-radius: 50px;
background: blue;
padding: 30px;
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
}

img {
width: 45px;
border-radius: 50%;
}

textarea {
border: 0;
font-size: 18px;
margin-left: 20px;
}

button {
border-radius: 50px;
background: blue;
padding: 30px;
}"
            />
          </div>

          <Subtitle
            text="Resultado do código abaixo:"
            margin="30px 0 30px"
            align="left;"
          />

          <Result>
            <BoxInputTw noFake />
          </Result>

          <Button onClick={handleClick} text="Avançar <3" disabled={disabled} />
        </Content>
      </Container>
    </>
  );
};

Step4.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step4;
