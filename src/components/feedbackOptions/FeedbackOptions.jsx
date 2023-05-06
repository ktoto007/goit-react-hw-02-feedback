import propTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func,
};
