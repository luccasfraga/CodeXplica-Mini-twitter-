import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import Header from '../../components/header';
import SubTitle from '../../components/subtitle';
import Title from '../../components/title';

// import { Container } from './styles';

const Home = props => {
  function handleClick() {
    props.history.push('/step01');
  }

  return (
    <>
      <Header {...props} />
      <Title text="Você já pensou em programar?" />
      <SubTitle text="Crie seu próprio Twitter e veja que você também pode desenvolver uma aplicação" />
      <Button onClick={handleClick} />
    </>
  );
};

Home.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Home;
