import PropTypes from "prop-types";
import Styles from './Feedback.module.css';
const Feedback = ({feedback,totalFeedback,positiveFeedback}) => {
  return (
    <div className={Styles.feedback}>
    <p className={Styles["feedback-text"]} >Good: {feedback.good}</p>
    <p className={Styles["feedback-text"]} >Neutral: {feedback.neutral}</p>
    <p className={Styles["feedback-text"]} >Bad: {feedback.bad}</p>
    <p className={Styles["feedback-text"]} >Total: {totalFeedback}</p>
    <p className={Styles["feedback-text"]} >Positive: {positiveFeedback}%</p>
  </div>
  )
}

Feedback.propTypes = {
    feedback: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  };
export default Feedback