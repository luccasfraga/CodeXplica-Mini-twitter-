import Button from '../../components/button'
import Header from '../../components/header'
import React from 'react';

// import { Container } from './styles';

const Home = (props) => {
  function handleClick() {
    props.history.push('/step01');
  };

  return (
    <>
      <Header {...props} />
      <h1>oie</h1>
      <Button onClick={handleClick} />
    </>
  )
};

export default Home;
