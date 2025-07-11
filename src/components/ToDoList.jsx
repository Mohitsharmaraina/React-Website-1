// to-do list
import { useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";
export default function App() {
  const [taskInput, setTaskInput] = useState(""); // holds current input value
  const [tasks, setTasks] = useState([]); // holds array of tasks
  const inputRef = useRef();

  // Updates the state with the current value of the input field
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Adds a new task to the tasks array
  const addTask = () => {
    if (taskInput.trim() !== "") {
      // Create a new array with the new task added
      setTasks([...tasks, { string: taskInput, done: false }]);
      setTaskInput(""); // Clear the input field
      inputRef.current.value = ""; // clear ref value
    } else {
      inputRef.current.focus();
    }
  };

  // Deletes a task from the tasks array
  const removeTask = (indexToRemove) => {
    // Filter out the task at the given index
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks); // Set the new array as state
  };

  // Toggles status of a specific task
  const toggleTaskDone = (indexToToggle) => {
    // Map over the tasks and create a new array
    const updatedTasks = tasks.map((task, index) => {
      if (index === indexToToggle) {
        // For the matching task, toggle its 'done' property
        return { ...task, done: !task.done };
      }
      return task; // For other tasks, return them as they are
    });
    setTasks(updatedTasks); // Set the new array as state
  };

  return (
    <>
      <div className="card">
        <h1 className="mb-2">To-Do List</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add task"
          value={taskInput}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            // Allow adding task with Enter key
            if (e.key === "Enter") {
              addTask();
            }
          }}
        ></input>
        <button className="button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="card">
        <ol>
          {tasks.length === 0 ? (
            <p className="text-center py-4 text-gray-600">
              No tasks yet. Add some!
            </p>
          ) : (
            tasks.map((item, i) => (
              <li
                className="text-xl font-medium space-x-8 flex items-center justify-around py-2"
                key={i}
              >
                <span
                  className={`${item.done ? "line-through text-gray-500" : ""}`}
                >
                  {`${i + 1})${item.string}`}
                </span>
                <div className="flex space-x-2 mr-8">
                  <button
                    className={`button ${
                      item.done
                        ? "bg-green-500 text-white hover:bg-green-400"
                        : "bg-blue-300 text-slate-700 hover:bg-blue-400"
                    }`}
                    onClick={() => toggleTaskDone(i)}
                  >
                    {item.done ? "Undo" : "Done"}
                  </button>
                  <button className="button" onClick={() => removeTask(i)}>
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ol>
        <LoadingSpinner />
      </div>
    </>
  );
}
