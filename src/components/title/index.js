import PropTypes from 'prop-types';
import React from 'react'
import { TitleStyles } from './styles';

const Title = (props) => (
  <TitleStyles color={props.color}margin={props.margin}>
    {props.text}
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
