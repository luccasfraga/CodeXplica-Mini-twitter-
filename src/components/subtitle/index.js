import PropTypes from 'prop-types';
import React from 'react';
import { SubtitleStyles } from './styles';

const SubTitle = ({ color, margin, text, size, align }) => (
  <SubtitleStyles color={color} margin={margin} size={size} align={align}>
    {text}
  </SubtitleStyles>
);

SubTitle.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  align: PropTypes.string,
};

SubTitle.defaultProps = {
  color: '#616161',
  margin: '0',
  size: '24px',
  align: 'center',
};

export default SubTitle;
