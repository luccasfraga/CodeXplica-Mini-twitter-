import { Header, Text } from './styles';

import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ background }) => (
  <Header background={background}>
    <Text>VC CODA</Text>
  </Header>
);

Navbar.propTypes = {
  background: PropTypes.string,
};

Navbar.defaultProps = {
  background: '#FF6464',
};

export default Navbar;
