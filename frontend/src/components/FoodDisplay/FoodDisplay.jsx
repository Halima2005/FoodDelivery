import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';
import './FoodDisplay.css';
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Check if food_list is still being fetched or is empty
  if (!food_list) {
    return <p>Loading top dishes near you...</p>;
  }

  if (food_list.length === 0) {
    return <p>No food items available.</p>;
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay