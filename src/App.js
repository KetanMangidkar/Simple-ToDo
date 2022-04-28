import { useState } from "react";
import "./App.css";

function App() {

  const [tasklist, setTodos] = useState([]);

  const getData = (value) => {
    setTodos([...tasklist, value])
  }
  return (
    <div>
      <Taskin getData={getData} />
      {tasklist.map((todo) => {
        return (
          <div className="tasklist">
            {todo}

            <button
              onClick={() => {
                setTodos(tasklist.filter((item) => {
                  return item !== todo;
                }))
              }}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

function Taskin({ getData }) {
  const [todos, setTodos] = useState("");
  return (
    <div className="input_task">

      <input
        placeholder="Enter your Task"
        onChange={(e) => { setTodos(e.target.value) }
        } />

      <button
        type=""
        onClick={() => {
          getData(todos)
        }}>Add Task</button>

    </div>
  )
}
export default App