import Button from '../../components/button'
import Header from '../../components/header'
import React from 'react';
import Title from '../../components/title'

// import { Container } from './styles';

const Home = (props) => {
  function handleClick() {
    props.history.push('/step01');
  };

  return (
    <>
      <Header {...props} />
      <Title text="passar aquiiii" />
      <Button onClick={handleClick} />
    </>
  )
};

export default Home;
