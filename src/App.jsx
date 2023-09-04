import Feedback from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import StaticFeedback from 'components/StaticFeedback/StaticFeedback';

import React, { useState } from 'react';

export const App = () => {
  const [data, setData] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGood = () => {
    setData({ ...data, good: data.good + 1 });
  };
  const handleNeutral = () => {
    setData({ ...data, neutral: data.neutral + 1 });
  };
  const handleBad = () => {
    setData({ ...data, bad: data.bad + 1 });
  };

  return (
    <div>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      {data.good === 0 && data.neutral === 0 && data.bad === 0 ? (
        <StaticFeedback />
      ) : (
        <Statistics good={data.good} neutral={data.neutral} bad={data.bad} />
      )}
    </div>
  );
};