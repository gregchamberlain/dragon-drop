import React from 'react';

const string = (value, onChange) => (
  <input type="text" onChange={onChange} value={value} />
);

const text = (value, onChange) => (
  <textarea onChange={onChange} value={value} />
);

const number = (value, onChange) => (
  <input type="number" onChange={onChange} value={value} />
);

const select = (...options) => (value, onChange) => (
  <select value={value} onChange={onChange}>
    {options.map(option => <option value={option} key={option}>{option}</option>)}
  </select>
);

export default {
  string,
  text,
  number,
  select
};
