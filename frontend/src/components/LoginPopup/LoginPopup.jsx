import axios from "axios"
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx'
import './LoginPopup.css'


const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

    const [currState,setcurrState] = useState("Login")
    const[data,setData] = useState({
      name:"",
      email:"",
      password:""

    })

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}));
    }

    const onLogin = async(event) =>{
      event.preventDefault();
      let newUrl = url;
      if(currState === "Login"){
        newUrl += "/api/user/login";
      }
      else{
        newUrl += "/api/user/register";
      }
      try {
          const response = await axios.post(newUrl, data);
          console.log(response.data); // <-- Add this line to inspect the response
          
          if(response.data.success){
              setToken(response.data.token);
              localStorage.setItem("token", response.data.token);
              setShowLogin(false);
          }
          else{
              alert(response.data.message);
          }
      } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while trying to register or login");
      }
  };




    return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>: <input name ='name' onChange ={onChangeHandler} value ={data.name} type='text' placeholder='Your name' required/>}
            
            <input name ='email' onChange ={onChangeHandler} value = {data.email} type='email' placeholder='Your email' required/>
            <input name ='password' onChange ={onChangeHandler} value = {data.password} type='password' placeholder='password' required/>
        </div>
        <button type = 'submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
              <p>By continuing, i agree to the terms of use &privacy policy.</p>
        </div>
        {currState==="Login" 
            ?  <p>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
             :<p>Alredey have an account?<span onClick={()=>setcurrState("Login here")}>Login herre</span></p>
        }
        
       
     </form>
      </div>
  )
}

export default LoginPopup