import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from "./component/Navbar";
import Todo from "./component/Todo";
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteall } from "./features/todos/todoSlice";

function App() {
  const [item, setItem] = useState({
    data: "",
    completed: false
  });

  const todo = useSelector((state) => state.TODO)

  const dispatch = useDispatch()

  const displaychange = (e) => {
    setItem({
      data: e.target.value,
      completed: false
    });
  };

  const addtodo = () => {
    dispatch(addTodo(item))
    setItem({
      data: "",
      completed: false
    });
    localStorage.setItem("items", JSON.stringify(todo))
  }

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      addtodo();
    }
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Navbar />
      <div className="flex-column-center ">
        <div className="flex-row-center">
          <p className="tododata">Completed tasks - {todo.filter((i) => i.completed == true).length} </p>
          <p className="tododata">Uncompleted tasks - {todo.length && todo.length - todo.filter((i) => i.completed == true).length} </p>
          <p className="tododata">Total tasks - {todo.length && todo.length}</p>
        </div>
        <div className="flex-row-center">
          <input
            type="text"
            value={item.data}
            onChange={displaychange}
            onKeyDown={onEnterPress}
            placeholder="enter your task"
            className="border-transparent shadow input-todo"
          ></input>
          <button className="text-center border-transparent shadow todo-button" onClick={addtodo}>
            Add
          </button>
          <button className="text-center border-transparent shadow todo-button" onClick={() => dispatch(deleteall())}>
            Reset
          </button>
        </div>
        <div className="todo-display shadow text-center">
          {todo.map((item, i) => {
            return <Todo key={i} item={item} i={i} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
