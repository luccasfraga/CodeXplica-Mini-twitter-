import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo'
import Header from '../../components/header';
import React from 'react';

const Step1 = () => (
  <>
    <Header />
    <Container>
      <CardInfo text="Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component" />

      <Content>
        Conteudo centro
      </Content>
    </Container>
  </>
);

export default Step1;
