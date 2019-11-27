import PropTypes from 'prop-types';
import React from 'react';
import { BoxButton, Text } from './styles';

const Button = ({
  onClick,
  border,
  borderRadius,
  margin,
  width,
  text,
  padding,
  size,
  disabled,
}) => (
  <BoxButton
    onClick={() => onClick()}
    border={border}
    borderRadius={borderRadius}
    margin={margin}
    width={width}
    padding={padding}
    size={size}
    disabled={disabled}
  >
    <Text>{text}</Text>
  </BoxButton>
);

Button.propTypes = {
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  margin: '0 auto',
  borderRadius: '60px',
  border: '1px solid #3FBFBF',
  width: '200px',
  text: 'Comece agora',
  padding: '16px',
  size: '16px',
  disabled: false,
};

export default Button;
