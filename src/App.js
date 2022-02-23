import React from 'react';
import './App.css';
import foodsArr from './foods.json';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  return (
    <div className="App">
      {/* food is prop */}
      {foods.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="food"/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
