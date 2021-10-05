import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

//Style
import { StyledInput } from './Input.style';

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
