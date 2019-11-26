import PropTypes from 'prop-types';
import React from 'react';
import { TitleStyles } from './styles';

const Title = ({ color, margin, text, size }) => (
  <TitleStyles color={color} margin={margin} size={size}>
    {text}
  </TitleStyles>
);

Title.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Title.defaultProps = {
  color: '#ffc801',
  margin: '0 0 20px',
  size: '51px',
};

export default Title;
