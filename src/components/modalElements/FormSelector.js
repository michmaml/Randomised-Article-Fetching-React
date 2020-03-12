/**
 * Michal J Sekulski, 2020
 */


import React from 'react';

// selector for each article's dropdown box
const FormSelector = ({ title, name, value, handleChange, placeholder, options }) => {
  return (
    <div className="column">
      <label> {title} </label>
      <select name={name} value={value} onChange={handleChange} required>
        <option value="" disabled>{placeholder}</option>
        {options.map(option => {
          return <option key={option} value={option} label={option}>{option} </option>
        })}
      </select>
    </div>
  );
};

export default FormSelector;