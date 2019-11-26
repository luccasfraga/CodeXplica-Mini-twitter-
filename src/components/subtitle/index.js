import PropTypes from 'prop-types';
import React from 'react';
import { SubtitleStyles } from './styles';

const SubTitle = ({ color, margin, text, size }) => (
  <SubtitleStyles color={color} margin={margin} size={size}>
    {text}
  </SubtitleStyles>
);

SubTitle.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

SubTitle.defaultProps = {
  color: '#616161',
  margin: '0',
  size: '16px',
};

export default SubTitle;
