import React, { useState } from 'react';
import './Taskform.css';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState(""); // State for task title
    const [category, setCategory] = useState("Work"); // State for task category

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (title.trim() === "") return; // Do nothing if title is empty

        // Create a new task object
        const newTask = {
            title,
            completed: false, // Default to false
            category
        };

        // Call the addTask function passed from the parent component
        addTask(newTask);
        setTitle(""); // Clear the title field after adding the task
    };

    return (
        <div className='task-form-container'>
            <form onSubmit={handleSubmit} className="task-form">
                <input 
                    type="text" 
                    placeholder="New task..." 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} // Update title state on input change
                    required
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
