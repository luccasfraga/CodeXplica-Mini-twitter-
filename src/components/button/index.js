import { BoxButton, Text } from './styles';

import PropTypes from 'prop-types';
import React from 'react'

const Button = (props) => (
  <BoxButton onClick={() => props.onClick()} border={props.border} borderRadius={props.borderRadius} margin={props.margin} width={props.width}>
    <Text>{props.text}</Text>
  </BoxButton>
);

Button.propTypes = {
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  margin: '0 auto',
  borderRadius: '6px',
  border:  '1px solid #3FBFBF',
  width: '200px',
  text: 'Começar'
};


export default Button