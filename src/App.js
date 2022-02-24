import React from 'react';
import './App.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  const [viewFoods, setViewFoods] = React.useState(
    foods.slice(Math.floor(foods.length / 2))
  );
  const [foodsData, setFoodsData] = React.useState(foodsArr);

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);
  };

  const searchFood = (input) => {
    let searchResults = foodsData.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(input);
    });
    setFoods(searchResults);
  };

  const handleDeleteBtn = (i) => {
    let deletedFood = [...foods];
    const allFoods = deletedFood.filter((food) => {
      console.log('What is going on');
      return food.name !== i;
    });
    console.log(allFoods);
    setFoods(allFoods);
  };
  return (
    <div className="App">
      <Search handleSearch={searchFood} />
      <AddFoodForm
        viewFoods={viewFoods}
        setViewFoods={setViewFoods}
        addNewFood={addNewFood}
      />
      <Divider> Food List</Divider>
      <Row>
        {foods.map((food) => {
          /* Render the foodbox components and pass the food object as a prop */

          return (
            <FoodBox
              key={food.name}
              food={food}
              allFoods={{ viewFoods, setViewFoods }}
              deleteBtn={handleDeleteBtn}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
