import React, { useState } from 'react';
import './TodoList.css'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div id='input'>
        <input id='add' type="text" placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div id='container'>
        {tasks.map((task, index) => (
          <div className='tasks' key={index}>
            <p>{task}</p>
            <button id='deleteButton' onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
