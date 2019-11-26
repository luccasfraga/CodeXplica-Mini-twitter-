import { Header, Text } from './styles';

import PropTypes from 'prop-types';
import React from 'react';

const CardInfo = ({ background }) => (
  <Header background={background}>
    <Text>Oieee</Text>
  </Header>
);

CardInfo.propTypes = {
  background: PropTypes.string,
};

CardInfo.defaultProps = {
  background: '#ecec',
};

export default CardInfo;
