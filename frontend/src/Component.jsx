import React, { useState } from 'react';

function Component() {
  const [Inc, setInc] = useState('');
  const [Age, setAge] = useState('');
  const [AvgRooms, setAvgRooms] = useState('');
  const [Pop, setPop] = useState('');
  const [Price, setPrice] = useState('');

  const handleClick = () => {
    const data = {
      area_income: parseFloat(Inc),
      area_house_age: parseFloat(Age),
      area_avg_rooms: parseFloat(AvgRooms),
      area_population: parseFloat(Pop),
      
    };

    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        setPrice(data.prediction);
        alert(`Predicted Price: ₹${data.prediction}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div>
        <label htmlFor="Area Income">Area Income</label><br />
        <input
          id="Area Income"
          name="Area Income"
          type="text"
          value={Inc}
          onChange={e => setInc(e.target.value)}
          placeholder="Enter Area Income"
        />
      </div>

      <div>
        <label htmlFor="Area House Age">Area House Age</label><br />
        <input
          id="Area House Age"
          name="Area House Age"
          type="text"
          value={Age}
          onChange={e => setAge(e.target.value)}
          placeholder="Enter Area House Age"
        />
      </div>

      <div>
        <label htmlFor="Area Population">Area Population</label><br />
        <input
          id="Area Population"
          name="Area Population"
          type="text"
          value={Pop}
          onChange={e => setPop(e.target.value)}
          placeholder="Enter Area Population"
        />
      </div>

      <div>
        <label htmlFor="Area Avg Rooms">Area Avg Rooms</label><br />
        <input
          id="Area Avg Rooms"
          name="Area Avg Rooms"
          type="text"
          value={AvgRooms}
          onChange={e => setAvgRooms(e.target.value)}
          placeholder="Enter Area Avg Rooms"
        />
      </div>

      <button onClick={handleClick}>
        Predict Price
      </button>

      <div>
        <h2>Predicted Price: ₹{Price}</h2>
      </div>
    </>
  );
}

export default Component;
