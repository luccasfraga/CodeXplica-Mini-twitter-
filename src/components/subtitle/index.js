import PropTypes from 'prop-types';
import React from 'react';
import { SubtitleStyles } from './styles';

const SubTitle = ({ color, margin, text, size, align }) => (
  <SubtitleStyles
    color={color}
    margin={margin}
    size={size}
    align={align}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

SubTitle.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  align: PropTypes.string,
};

SubTitle.defaultProps = {
  color: '#fff',
  margin: '0',
  size: '16px',
  align: 'center',
};

export default SubTitle;
