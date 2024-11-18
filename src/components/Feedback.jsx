// eslint-disable-next-line react/prop-types
function Feedback({ onFeedback }) {
    return (
      <div className="options" style={{display:"flex",alignItems:"flex-start"}}>
        <button className="count-buttons" id="good" onClick={() => onFeedback("good")}>Good</button>
        <button className="count-buttons" id="neutral" onClick={() => onFeedback("neutral")}>Neutral</button>
        <button className="count-buttons" id="bad" onClick={() => onFeedback("bad")}>Bad</button>
        <button className="count-buttons" id="reset" onClick={() => onFeedback("reset")}>Reset</button>

      </div>
    );
  }
  
  export default Feedback;