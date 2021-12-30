import React,{useState} from 'react';
import {ADD_TODO,DELETE_TODO,CLEAR_TODO} from '../../redux/action/action'
import {useDispatch} from 'react-redux';
import { AiOutlinePlusCircle } from "react-icons/ai";
import './App.css';
import List from '../list/List'

function App() {
  const [value,setValue] = useState('');
  const dispatch = useDispatch();
  // console.log(value);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="main">
        <div className="input">
        <input type= 'text' placeholder="Enter A Task"  value= {value} onChange={(e)=>{setValue(e.target.value)}}/>
        <span onClick={()=>dispatch(ADD_TODO(value))}><AiOutlinePlusCircle/></span>
        </div>

      </div>

     <List/>
    </div>
  );
}

export default App;
