import React from 'react';
import style from './Statistics.module.css';

export default function Statistics({good, neutral, bad}) {
   const total = good + neutral + bad;
   const procent = (good / total) * 100 

  return (
    <div className={style.statistics}>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: {good} </p>
        </li>
        <li>
          <p>Neutral:{neutral} </p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {procent.toFixed(1)}%</p>
        </li>
      </ul>
    </div>
  );
}
