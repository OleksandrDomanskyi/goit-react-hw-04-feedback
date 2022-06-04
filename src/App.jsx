import { Component } from "react";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

const options = ['good', 'neutral', 'bad'];

class App extends Component { 

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = Math.round(
      (good * 100) / total);
    return percentage;
  };

  addFeedback = (propertyName) => {
    this.setState(prevState => {
      return {
        [propertyName]: prevState[propertyName] +1
      }
    })
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const { addFeedback } = this;
  
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
};

export default App;