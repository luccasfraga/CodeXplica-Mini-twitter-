import PropTypes from 'prop-types';
import React from 'react';
import { Text, CardInfo } from './styles';

const CardInfoComponent = ({ text, background }) => (
  <CardInfo background={background}>
    <Text>{text}</Text>
  </CardInfo>
);

CardInfoComponent.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
};

CardInfoComponent.defaultProps = {
  text: 'CODE INIT',
  background: 'green',
};

export default CardInfoComponent;
