import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// Styles
import { StyledInput } from './Input.style';

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
