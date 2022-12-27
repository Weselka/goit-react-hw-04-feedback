import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Heading,
  Container,
  Section,
  FeedbackOptions,
  Notification,
  Statistics,
} from 'components';

const optionState = { good: 0, neutral: 0, bad: 0 };

export function App() {
  const [options, setOptions] = useState(optionState);
  const { good, neutral, bad } = options;

  const onLeaveFeedback = optionState => {
    setOptions(prevState => ({
      ...prevState,
      [optionState]: prevState[optionState] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback) * 100);
  };

  const countTotalFeedback = good + neutral + bad;

  return (
    <Container>
      <Heading marginBottom="50px" textAlign="center">
        Cafe "Expresso"
      </Heading>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}