import PropTypes from 'prop-types';
import React from 'react';
import { TitleStyles } from './styles';

const Title = ({ color, margin, text, size }) => (
  <TitleStyles
    color={color}
    margin={margin}
    size={size}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

Title.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Title.defaultProps = {
  color: '#fff',
  margin: '0 0 20px',
  size: '60px',
};

export default Title;
