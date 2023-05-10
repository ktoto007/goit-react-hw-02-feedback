import propTypes from 'prop-types';
import {
  FeedbackButton,
  ButtonList,
} from 'components/feedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <FeedbackButton type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </FeedbackButton>
        </li>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func,
};
