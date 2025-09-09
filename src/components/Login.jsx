

import React, {  useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
let initialState={
    name:"",
    email:"",
    password:""
}

// {name:"amit",email:"amitkm",password:""}
// {name:"amit",emai:"amit"}
function formReducer(state,action){
    switch(action.type){
        case "update":
            return {...state,[action.field]:action.value}
        case "reset":
            return  initialState
        default:
            return state
    }
}
export default function FormUR() {
    let navigate=useNavigate()
    const[state,dispatch]=useReducer(formReducer,initialState)
       function handleClick(e){
             e.preventDefault();
             console.log(state);
             navigate('/card')
            //dispatch({type:"reset"})      
       }
  return (
    <>
       <form className='max-w-md mx-auto p-6 bg-blue-100 shadow-md rounded-md space-y-4 mt-25 shadow-3xl' onSubmit={handleClick}>
        <h1 className='text-center font-bold text-3xl'>Login form</h1>
        <div>
        {/* <label className="block font-semibold">Name</label> */}
          <input type="text" placeholder='Enter your name' value={state.name} 
          onChange={(e)=>dispatch({type:"update",field:"name",value:e.target.value})} 
          className='w-full p-2 border border-gray-300 rounded text-center'/>
        </div>
          
        <div>
        {/* <label>Email</label> */}
          <input type="email" placeholder='Enter your email' value={state.email} 
          onChange={((e)=>dispatch({type:"update",field:"email",value:e.target.value}))} 
          className='w-full p-2 border border-gray-300 rounded text-center'/>
        </div>
        <div>
        {/* <label>Password</label> */}
          <input  type="password" placeholder='Password@123' value={state.password} 
          onChange={(e)=>dispatch({type:"update",field:"password",value:e.target.value})} 
          className='w-full p-2 border border-gray-300 rounded text-center'/>
        </div>
          <div className='flex justify-around'>
          <button className='bg-blue-500 text-white rounded px-4 py-1' type='submit'>Submit</button>
          <button className='bg-blue-500 text-white rounded px-4 py-1' onClick={()=>dispatch({type:'reset'})}>Reset</button>
          </div>
          
        </form>    
    </>
  )
}
