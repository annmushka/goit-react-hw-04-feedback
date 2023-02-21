import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return Object.values({ good, neutral, bad }).reduce(
      (sum, elem) => sum + elem,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  // const handleClick = name => {
  //   this.setState(prevState => {
  //     return { [name]: prevState[name] + 1 };
  //   });
  // };
  const handleClick = name => {
    // const { name } = event.target;
    // console.log(name);
    // (prevState => ({ [name]: prevState[name] + 1 }));
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const total = countTotalFeedback();

  return (
    <main>
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          handleClick={handleClick}
        />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage() || 0}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </main>
  );
};
