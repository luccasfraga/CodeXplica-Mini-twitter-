import { Container, Content } from './styles';

import Header from '../../components/header';
import React from 'react';

<<<<<<< HEAD
// import { Container } from './styles';

const Step1 = () => (
  <>
    <CardInfo background="blue" />
    <h1>oie</h1>
=======
const Step1 = () => (
  <>
    <Header background="blue" />
    <Container>
      <div style={{ width: '300px', height: '100vh' }}>
        components de info
      </div>

<<<<<<< HEAD
    <Content background="#c1c1c1">
      Conteudo centro
    </Content>
>>>>>>> ae93b4af73c2e99f67a91fa9fdb86afc2a41503a
=======
      <Content background="#c1c1c1">
        Conteudo centro
      </Content>
    </Container>
>>>>>>> 56ae798cc2875e6bc22dd3f701af82645684dc4b
  </>
);

export default Step1;
