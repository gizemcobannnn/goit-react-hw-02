import { useState, useEffect } from 'react'
import './App.css'
import Options from './components/Options';

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
      setLocalStorage(resetFeedback);

    } else {
      // Seçilen geri bildirim türüne göre durumu artırıyoruz
      setFeedback((prevFeedback) =>{ 
        const updatedFeedback={
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      setLocalStorage(updatedFeedback);
      return updatedFeedback;
    });
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const setLocalStorage=(data)=>{
    localStorage.setItem("feedbackData",JSON.stringify(data));
    }

  const getLocalStorage=()=>{
    const localData = localStorage.getItem("feedbackData")
    if (localData) {
    setFeedback(JSON.parse(localData));
    }
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <>
      <div className='description' style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
        <h1 style={{marginBottom:0}}>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </div>
      <Options onFeedback={updateFeedback}  />

      <div className="feedback" style={{display:"flex",alignItems:"flex-start"}}>
        <p className="feedback-text" style={{marginRight:"10px"}}>Good: {feedback.good}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Neutral: {feedback.neutral}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Bad: {feedback.bad}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Total: {totalFeedback}</p>
        <p className="feedback-text" style={{marginRight:"10px"}}>Positive: {positiveFeedback}</p>
      </div>

    </>
  )
}

export default App
