import React from 'react';
import { merge } from 'lodash';

const string = (value, onChange) => (
  <input type="text" onChange={e => onChange(e.target.value)} value={value} />
);

const text = (value, onChange) => (
  <textarea onChange={e => onChange(e.target.value)} value={value} />
);

const number = (value, onChange) => (
  <input type="number" onChange={e => onChange(parseInt(e.target.value))} value={value} />
);

const select = (...options) => (value, onChange) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(option => <option value={option} key={option}>{option}</option>)}
  </select>
);

export default {
  string,
  text,
  number,
  select
};
