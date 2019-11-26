import PropTypes from 'prop-types';
import React from 'react';
import { SubtitleStyles } from './styles';

const SubTitle = ({ color, margin, text }) => (
  <SubtitleStyles color={color} margin={margin}>
    {text}
  </SubtitleStyles>
);

SubTitle.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
};

SubTitle.defaultProps = {
  color: 'black',
  margin: '500px auto',
};

export default SubTitle;
