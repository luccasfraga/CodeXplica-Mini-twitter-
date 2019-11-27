import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container, Content, Result } from './styles';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Message from '../../text-steps.json';
import Subtitle from '../../components/subtitle';
import HeaderTw from '../../components/headerTw';

const Step2 = props => {
  const [disabled, setDisabled] = useState(true);
  const [editorValue, setEditorValue] = useState('');

  function handleClick() {
    props.history.push('/step03');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="50%" background="#f9f9f9" text={Message.step02} />

        <Content>
          <Subtitle
            text="Copie o codigo ao lado para você ir para o próximo nível."
            margin="0 0 30px"
            align="left;"
            color="#333"
          />
          <div>
            <CodeEditor
              mode="css"
              compareValue="div {
                width: 100%;
                border: 1px solid grey
                padding: 30px;
                };"
              handleDisabled={() => setDisabled(false)}
              handleEnabled={() => setDisabled(true)}
              value={editorValue}
              onChange={setEditorValue}
            />
            <CodeEditor
              mode="css"
              readOnly
              value={` div {
width: 100%;
border: 1px solid grey
padding: 30px;
};`}
            />
          </div>

          <Subtitle
            text="Resultado do código abaixo:"
            margin="30px 0 30px"
            align="left;"
          />

          <Result>
            <HeaderTw />
          </Result>

          <Button onClick={handleClick} text="Avançar <3" disabled={disabled} />
        </Content>
      </Container>
    </>
  );
};

Step2.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step2;
