import React, { Component } from 'react';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (a, b) => {
    if (a === 0 && b === 0) {
      return 0;
    } else {
      return Math.round((Number(a) / Number(b)) * 100);
    }
  };

  onLeaveFeedback = event => {
    this.setState(prevState => {
      const { name } = event.target;
      return {
        [name]: 1 + prevState[name],
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
