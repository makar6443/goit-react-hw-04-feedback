import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const isEmptyList = !total;
  
  const onLeaveFeedback = evt => {
    setGood(prevState => prevState + 1);
    setNeutral(prevState => prevState + 1);
    setBad(prevState => prevState + 1);
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good * 100) / total) + '%';
  }
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {isEmptyList && <Notification message="There is no feedback" />}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}

export default App;