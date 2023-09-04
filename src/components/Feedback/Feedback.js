import React from 'react';
import style from './Feedback.module.css';

export default function Feedback({handleGood, handleNeutral, handleBad}) {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <ul className={style.buttons}>
        <li>
          <button onClick={handleGood}>Good</button>
        </li>
        <li>
          <button onClick={handleNeutral}>Neutral</button>
        </li>
        <li>
          <button onClick={handleBad}>Bad</button>
        </li>
      </ul>
    </div>
  );
}
