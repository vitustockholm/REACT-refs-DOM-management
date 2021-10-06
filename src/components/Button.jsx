import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

// Styles
import { StyledButton } from './Button.style';

const Button = forwardRef(({ text, action, primary, secondary }, ref) => {
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
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
