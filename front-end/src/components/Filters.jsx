import React from 'react';


export default function Filters ({ setFilter }) {
  const locationOptions = [
    'Upper',
    'Upper Left',
    'Upper Right',
    'Lower',
    'Lower Left',
    'Lower Right',
    'Centre',
  ];

  return (
    <div className='filter-container'>
      <label>Filter by location </label>
      <select onChange={setFilter}>
      <option value=""> - </option>
        {
          locationOptions.map((option) => (
            <option value={option}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}
