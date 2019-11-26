import PropTypes from 'prop-types';
import React from 'react';
import { TitleStyles } from './styles';

const Title = ({ color, margin, text }) => (
  <TitleStyles color={color} margin={margin}>
    {text}
  </TitleStyles>
);

Title.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  color: 'black',
  margin: '500px auto',
};

export default Title;
