import PropTypes from "prop-types";
const Feedback = ({feedback,totalFeedback,positiveFeedback}) => {
  return (
    <div className="feedback" style={{display:"flex",alignItems:"flex-start"}}>
    <p className="feedback-text" style={{marginRight:"10px"}}>Good: {feedback.good}</p>
    <p className="feedback-text" style={{marginRight:"10px"}}>Neutral: {feedback.neutral}</p>
    <p className="feedback-text" style={{marginRight:"10px"}}>Bad: {feedback.bad}</p>
    <p className="feedback-text" style={{marginRight:"10px"}}>Total: {totalFeedback}</p>
    <p className="feedback-text" style={{marginRight:"10px"}}>Positive: {positiveFeedback}%</p>
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