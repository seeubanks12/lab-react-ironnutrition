import React from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = (props) => {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [calories, setCalories] = React.useState(0);
  const [servings, setServings] = React.useState(0);

  const nameInput = (e) => setName(e.target.value);
  const imageInput = (e) => setImage(e.target.value);
  const caloriesInput = (e) => setCalories(e.target.value);
  const servingsInput = (e) => setServings(e.target.value);

  const submit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addNewFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  // Iteration 4
  
    return (
      <form onSubmit={submit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" name="name" onChange={nameInput} />

        <label>Image</label>
        <Input value={image} type="text" onChange={imageInput} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={caloriesInput} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={servingsInput} />

        <button type="submit">
          Create
        </button>
      </form>
    );
  };


export default AddFoodForm;
