import PropTypes from 'prop-types';
import React from 'react'
import { SubtitleStyles } from './styles';

const SubTitle = (props) => (
  <SubtitleStyles color={props.color} margin={props.margin}>
    {props.text}
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
