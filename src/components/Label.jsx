import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ name, text }) => {
  return <label htmlFor={name}>{text}</label>;
};
Label.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;
