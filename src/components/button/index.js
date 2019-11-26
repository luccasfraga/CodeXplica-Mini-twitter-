import { BoxButton, Text } from './styles';

import PropTypes from 'prop-types';
import React from 'react'

const Button = ({ handleClick, margin, border, borderRadius, width, text, background, link, history}) => {



  function handleClick() {

    // history.push('/step01');
    // console.log(this.props)
  }

  return(
    <BoxButton onClick={() => handleClick(link)} border={border} borderRadius={borderRadius} margin={margin} width={width} background={background}>
    <Text  >{text}</Text>
    </BoxButton>
  )
}

Button.propTypes = {
    borderRadius: PropTypes.string,
    border: PropTypes.string,
    background: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    margin: PropTypes.string,
    width: PropTypes.string,
    text: PropTypes.string,
  };

Button.defaultProps = {
    background: '#3FBFE1',
    margin: '0 auto',
    borderRadius: '6px',
    border:  '1px solid #3FBFBF',
    width: '200px',
    text: 'Começar'
  };


export default Button
