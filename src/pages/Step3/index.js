import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container, Content, Result } from './styles';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Subtitle from '../../components/subtitle';
import Message from '../../text-steps.json';
import imageTwitter from '../../images/twitter.png';

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
        <CardInfo
          width="50%"
          background="#f9f9f9"
          text={Message.step03}
        />

        <Content>
          <Subtitle
            text="Copie o codigo ao lado para você ir para o próximo nível."
            margin="0 0 30px"
            align="left;"
          />
          <div>
            <CodeEditor
              mode="html"
              compareValue="<h1>oie</h1>"
              handleDisabled={() => setDisabled(false)}
              handleEnabled={() => setDisabled(true)}
              value={editorValue}
              onChange={setEditorValue}
            />
            <CodeEditor mode="html" readOnly value="<h1>oie</h1>" />
          </div>

          <Subtitle
            text="Resultado do código abaixo:"
            margin="30px 0 30px"
            align="left;"
          />

          <Result>
            <div>
              <img
                width="30px"
                height="30px"
                src={imageTwitter}
                alt="logo do Twitter"
              />
            </div>
            <Subtitle text="Home" margin="8px 20px" align="left;" />
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
