import PropTypes from 'prop-types';
import React from 'react';
import { CardInfo } from './styles';

const CardInfoComponent = ({ text, background, width }) => (
  <CardInfo
    background={background}
    width={width}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

CardInfoComponent.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  width: PropTypes.string,
};

CardInfoComponent.defaultProps = {
  background: '#dcdcdc',
  width: '400px',
};

export default CardInfoComponent;
