import React from 'react';

import PropTypes from 'prop-types';
import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo';
import Header from '../../components/header';
import Message from '../../text-steps.json';
import HeaderTw from '../../components/headerTw';
import BoxInputTw from '../../components/InputTw';

const Step7 = props => {
  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo width="30%" background="#f9f9f9" text={Message.step07} />

        <Content>
          <HeaderTw />
          <BoxInputTw />
        </Content>
      </Container>
    </>
  );
};

Step7.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Step7;
