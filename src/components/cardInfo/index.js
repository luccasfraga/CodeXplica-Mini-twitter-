import PropTypes from 'prop-types';
import React from 'react';
import { Text, CardInfo } from './styles';

const CardInfoComponent = ({ text, background, width }) => (
  <CardInfo background={background}>
    <Text>{text}</Text>
  </CardInfo>
);

CardInfoComponent.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  width: PropTypes.string,
};

CardInfoComponent.defaultProps = {
  text: 'CODE INIT',
  background: '#dcdcdc',
  width: '400px',
};

export default CardInfoComponent;
