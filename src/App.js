import React from 'react';
import './App.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  return (
    <div className="App">
      {/* food is prop */}
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      {foods.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="food" />
          </div>
        );
      })} */}
      <Divider> Food List</Divider>
      <Row>
        {foods.map((food) => {
          return <FoodBox food={food}/>
        })}
      </Row>
    </div>
  );
}

export default App;
