import React, { useState } from 'react';

function Selection() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(`Selected option: ${event.target.value}`);
  };
   console.log(selectedOption)
  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default Selection;