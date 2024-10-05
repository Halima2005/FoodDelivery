import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './List.css'

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      
      // Log the response to ensure the structure is correct
      console.log("API Response:", response);
  
      // Correct the path to the food items array
      if (response.data && response.data.success && Array.isArray(response.data.date)) {
        setList(response.data.date);  // Update this line to use 'date' instead of 'data'
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
      console.error("Fetch List Error:", error);
    }
  }
  
  
  const removeFood = async (foodId) => {
  
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error("Error");
      }
   
  }

  useEffect(() => {
    fetchList();
  }, []); // Added empty dependency array to call fetchList only once

  return (
    <div className='list add flex-col'>
      <p>All foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {Array.isArray(list) && list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className='list-table-format'>
              <div>
                <img src={`${url}/images/` + item.image} alt="" />
              </div>
              <div>{item.name}</div>
              <div>{item.category}</div>
              <div>{item.price}</div>
              <div
                 onClick={() => removeFood(item._id)} className='cursor'>
                  X
              
              </div>
            </div>
          ))
        ) : (
          <div>No food items available</div>
        )}
      </div>
    </div>
  )
}

export default List;
