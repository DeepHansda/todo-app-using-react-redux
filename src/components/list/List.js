import React from "react";
import { ADD_TODO, DELETE_TODO, CLEAR_TODO } from "../../redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import "./list.css";

function List() {
  const list = useSelector((state) => state.todoReducer.list);
  console.log(list);
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      {list.map((i,index) => {
        return (
          <li className="list-item" key={index}>
            <p>{i.value}</p>
            <span onClick={() => dispatch(DELETE_TODO(i.id))}>
              <AiOutlineDelete />
            </span>
          </li>
        );
      })}

      <div className="clear-button" >
          <button onClick={() =>dispatch(CLEAR_TODO())}>clear</button>
      </div>
    </div>
  );
}

export default List;
