import PropTypes from 'prop-types';
import Styles from './Options.module.css';
function Options({ onFeedback }) {
    return (
      <div className="options" style={{display:"flex",alignItems:"flex-start"}}>
        <button className={Styles["count-buttons"]} id="good" onClick={() => onFeedback("good")}>Good</button>
        <button className={Styles["count-buttons"]} id="neutral" onClick={() => onFeedback("neutral")}>Neutral</button>
        <button className={Styles["count-buttons"]} id="bad" onClick={() => onFeedback("bad")}>Bad</button>
      </div>
    );
  }
  
  Options.propTypes={
    onFeedback:PropTypes.func.isRequired,
  }
  
  export default Options;