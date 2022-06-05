import { useState, useCallback } from "react";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

const options = ['good', 'neutral', 'bad'];

const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const percentage = Math.round(
      (good * 100) / countTotalFeedback());
    return percentage;
  };

  const addFeedback = useCallback((propertyName) => {
    setState(prevState => {
      return {
        ...prevState,
        [propertyName]: prevState[propertyName] + 1
      };
    });
  }, [setState]);

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {!total && <Notification message='There is no feedback' />}
          {total > 0 && <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage ? positivePercentage : 0}
          />}
        </Section>
    </div>
  );
}

export default App;