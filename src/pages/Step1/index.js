import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo'
import Header from '../../components/header';
import React from 'react';

const Step1 = () => (
  <>
    <Header />
    <Container>
      <CardInfo background="blue" />

      <Content background="#c1c1c1">
        Conteudo centro
      </Content>
    </Container>
  </>
);

export default Step1;
