import React from 'react';

const FoodItem = ({ food }) => {
  return (
    <div>
      <h4>{food.name}</h4>
      <p>Calories: {food.calories}</p>
    </div>
  );
};

export default FoodItem;

