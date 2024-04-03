import React from "react";
import { useDispatch } from 'react-redux'
import { deletetodo } from '../features/todos/todoSlice'
import { modTodo } from "../features/todos/todoSlice";

const Todo = ({ a, i }) => {
  const dispatch = useDispatch()
 
  return (
    <>
      <div className="tododiv">
        <input className="todoCheck" type="checkbox"
          onChange={(e) => {
            dispatch(modTodo({
              value:a.data,
              check: e.target.checked,
              id: i
            }))
          }}
        />
        <p className={`${a.completed ? "completedtodo" : "to-do"}`}>{i + 1}.{" "}</p>
        <p className={`${a.completed ? "completedtodo" : "to-do"}`}>
          {a.data}
        </p>
        <p className="deletetodo" onClick={() => dispatch(deletetodo(i))}>X</p>
      </div>
    </>
  );
};

export default Todo;
