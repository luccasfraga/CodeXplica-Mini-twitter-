import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import React from 'react';

const Step1 = (props) => (
  <>
    <Header {...props} />
    <Container>
      <CardInfo width="50%" background="#f9f9f9" text="Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component" />

      <Content>
        <CodeEditor mode='html' />
      </Content>
    </Container>
  </>
);

export default Step1;
