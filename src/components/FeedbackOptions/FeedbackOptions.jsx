import PropTypes from 'prop-types';
import { Container, FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <Container>
      {options.map(option => (
        <FeedbackButton
          key={option}
          name={[option]}
          type="button"
          onClick={onClick}
        >
          {option}
        </FeedbackButton>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired)
};
