// eslint-disable-next-line react/prop-types
function Options({ onFeedback }) {
    return (
      <div className="options" style={{display:"flex",alignItems:"flex-start"}}>
        <button className="count-buttons" id="good" onClick={() => onFeedback("good")}>Good</button>
        <button className="count-buttons" id="neutral" onClick={() => onFeedback("neutral")}>Neutral</button>
        <button className="count-buttons" id="bad" onClick={() => onFeedback("bad")}>Bad</button>
      </div>
    );
  }
  
  export default Options;