import PropTypes from 'prop-types';
import React from 'react';
import { Text } from './styles';

const CardInfo = ({ background }) => (
  <div>
    <Text>Oieee</Text>
  </div>
);

CardInfo.propTypes = {
  background: PropTypes.string,
};

CardInfo.defaultProps = {
  background: '#ecec',
};

export default CardInfo;
