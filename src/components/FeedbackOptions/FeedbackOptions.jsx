import PropTypes from 'prop-types';
import { ButtonSet, Button } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonSet>
    {options.map(option => (
      <Button
        name={option}
        key={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.substring(1)}
      </Button>
    ))}
  </ButtonSet>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;