import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo'
import Header from '../../components/header';
import React from 'react';

const Step1 = (props) => (
  <>
    <Header {...props} />
    <Container>
      <CardInfo background="#f9f9f9" text="Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component" />

      <Content>
        Conteudo centro
      </Content>
    </Container>
  </>
);

export default Step1;
