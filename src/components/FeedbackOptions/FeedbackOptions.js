import PropTypes from 'prop-types';

import { ControlsBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ControlsBox>
      {options.map(optionState => {
        return (
          <li key={optionState}>
            <Button onClick={() => onLeaveFeedback(optionState)}>
              {optionState}
            </Button>
          </li>
        );
      })}
    </ControlsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
