import { Container, Content } from './styles';

import Header from '../../components/header';
import React from 'react';

const Step1 = () => (
  <>
    <Header background="blue" />
    <Container>
      <div style={{ width: '300px', height: '100vh' }}>
        components de info
      </div>

      <Content background="#c1c1c1">
        Conteudo centro
      </Content>
    </Container>
  </>
);

export default Step1;
