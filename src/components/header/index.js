import { Header, Text } from './styles';

import React from 'react';

const Navbar = (props) => {
  function handleClick() {
    props.history.push('/');
  };

  return(
    <Header>
      <Text onClick={handleClick}>VC CODA</Text>
    </Header>
  )
};
export default Navbar;
