import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo';
import Header from '../../components/header';
import React from 'react';
import CodeEditor from '../../components/codeEditor';

const Step1 = (props) => (
  <>
    <Header {...props} />
    <Container>
      <CardInfo background="#f9f9f9" text="Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component" />

      <Content background="#c1c1c1">
        <CodeEditor mode='html' />
      </Content>
    </Container>
  </>
);

export default Step1;
