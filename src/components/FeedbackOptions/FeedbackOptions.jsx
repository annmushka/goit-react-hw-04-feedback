import React from 'react';
import PropTypes from 'prop-types';

import { Options, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, handleClick }) => (
  <Options>
    {options.map(button => {
      return (
        <Button type="button" key={button} onClick={() => handleClick(button)}>
          {button.toUpperCase().slice(0, 1) + button.slice(1)}
        </Button>
      );
    })}
  </Options>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};
