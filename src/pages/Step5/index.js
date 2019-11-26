import React from 'react';
import { Container, Content, Result } from './styles';

import Button from '../../components/button';
import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Subtitle from '../../components/subtitle';
import Message from '../../text-steps.json';

const Step5 = props => {
  function handleClick() {
    props.history.push('/step06');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="50%" background="#f9f9f9" text={Message.step05} />

        <Content>
          <Subtitle
            text="Copie o codigo ao lado para você ir para o próximo nível."
            margin="0 0 30px"
            align="left;"
          />
          <div>
            <CodeEditor mode="html" />
            <CodeEditor mode="html" readOnly value="<h1>oie</h1>" />
          </div>

          <Result>Resultado do code aqui....</Result>

          <Button onClick={handleClick} text="Comparar" />
        </Content>
      </Container>
    </>
  );
};

export default Step5;
