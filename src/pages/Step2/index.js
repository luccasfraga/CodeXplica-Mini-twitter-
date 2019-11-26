import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

import CardInfo from '../../components/cardInfo';
import CodeEditor from '../../components/codeEditor';
import Header from '../../components/header';
import Button from '../../components/button';

const Step2 = props => {
  function handleClick() {
    props.history.push('/step03');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <CardInfo
          width="50%"
          background="#f9f9f9"
          text="Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component Teste Component"
        />
        <Content>
          <CodeEditor mode="css" />
        </Content>
      </Container>
      <Button onClick={handleClick} />
    </>
  );
};

Step2.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Step2;
