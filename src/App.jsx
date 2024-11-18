import { useState, useEffect } from 'react'
import './App.css'
import Feedback from './components/Feedback';
import Notification from './components/Notification';
import { Description } from './components/Description';

function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      // Reset seçeneği ile tüm durumları sıfırlarız
      const resetFeedback ={ good: 0, neutral: 0, bad: 0 }
      setFeedback(resetFeedback);

    } else {
      // Seçilen geri bildirim türüne göre durumu artırıyoruz
      setFeedback((prevFeedback) =>{ 
        const updatedFeedback={
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      return updatedFeedback;
    });
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

    useEffect(() => {
      localStorage.setItem("feedbackData", JSON.stringify(feedback));
    }, [feedback]);


  useEffect(() => {
    const localData = localStorage.getItem("feedbackData");
    if (localData) {
      setFeedback(JSON.parse(localData));
    }
  }, []);


  return (
    <>
      <Description></Description>
      <Feedback onFeedback={updateFeedback}  />

      <div className="feedback" style={{display:"flex",alignItems:"flex-start"}}>
        <p className="feedback-text" style={{marginRight:"10px"}}>Good: {feedback.good}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Neutral: {feedback.neutral}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Bad: {feedback.bad}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Total: {totalFeedback}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Positive: {positiveFeedback}</p>
      </div>

      {totalFeedback === 0 && (
        <Notification message="No feedback given yet. Please leave feedback!" />
      )}

      {totalFeedback > 0 && (
        <button
          onClick={() => updateFeedback("reset")}
          style={{
            marginTop: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>)
      }
    </>
  )
}

export default App
