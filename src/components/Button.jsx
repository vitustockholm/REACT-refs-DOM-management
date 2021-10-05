import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

//Styles
import { StyledButton } from './Button.style';

const Button = forwardRef(({ action, primary, secondary, text }, ref) => {
  return (
    <StyledButton
      onClick={action}
      primary={primary}
      secondary={secondary}
      ref={ref}
    >
      {text}
    </StyledButton>
  );
});

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
