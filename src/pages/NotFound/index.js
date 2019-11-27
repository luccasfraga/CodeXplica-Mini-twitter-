import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import Header from '../../components/header';
import SubTitle from '../../components/subtitle';
import Title from '../../components/title';
import { Content } from './styles';

const NotFound = props => {
  function handleClick() {
    props.history.push('/');
  }

  return (
    <>
      <Header {...props} />
      <Content>
        <div>
          <Title text="Oopa! Acho que você <span>se perdeu <br /> por aqui.</span>" />
        </div>
        <div>
          <SubTitle text="Mas eu vou te dar um ajuda, clique no botão abaixo que eu te levo de volta à página inicial." />
        </div>
        <Button
          width="250px"
          size="18px"
          padding="25px 0"
          onClick={handleClick}
          text="Voltar"
        />
      </Content>
    </>
  );
};

NotFound.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NotFound;
