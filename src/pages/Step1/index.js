import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo';
import Header from '../../components/header';
import React from 'react';
import CodeEditor from '../../components/codeEditor';

const Step1 = () => (
  <>
    <Header />
    <Container>
      <CardInfo />

      <Content background="#c1c1c1">
        <CodeEditor mode='html' />
      </Content>
    </Container>
  </>
);

export default Step1;
