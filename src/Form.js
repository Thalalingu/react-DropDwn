import React, { useState } from 'react';

function Form() {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      dropdown1Value,
      dropdown2Value,
    };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dropdown 1:
        <select value={dropdown1Value} onChange={handleDropdown1Change}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <label>
        Dropdown 2:
        <select value={dropdown2Value} onChange={handleDropdown2Change}>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
          <option value="option6">Option 6</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
