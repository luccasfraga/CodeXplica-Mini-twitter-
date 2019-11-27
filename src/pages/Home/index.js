import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import Header from '../../components/header';
import SubTitle from '../../components/subtitle';
import Title from '../../components/title';
import { Content } from './styles';

// import { Container } from './styles';

const Home = props => {
  function handleClick() {
    props.history.push('/step01');
  }

  return (
    <>
      <Header {...props} />
      <Content>
        <div>
          <Title text="Você já pensou em <span>começar<br /> a programar?</span>" />
          <SubTitle text="Em poucos passos você pode mostrar para seus amigos que você criou uma aplicação web! 😱" />
        </div>
        <Button
          width="250px"
          size="18px"
          padding="25px 0"
          onClick={handleClick}
        />
      </Content>
    </>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
