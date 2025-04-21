import React, { useState, useEffect } from 'react';
import TaskForm from './Taskform';
import './Tasklist.css';
import { useNavigate } from 'react-router-dom'; 

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    

    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            setShowLoginModal(true);
        }
    }, []); 
    const handleLoginRedirect = () => {
        setShowLoginModal(false);
        navigate('/signin');
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            const fetchTasks = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/tasks?userId=${userId}`);
                    if (response.ok) {
                        const data = await response.json();
                        if (Array.isArray(data)) {
                            setTasks(data);
                        } else {
                            console.error("Data is not an array:", data);
                            setTasks([]);
                        }
                    } else {
                        console.error("Failed to fetch tasks:", response.status);
                    }
                } catch (error) {
                    console.error("Error fetching tasks:", error);
                }
            };
            fetchTasks();
        } else {
            console.error("User ID not found in localStorage");
        }
    }, []);
    

    // Save tasks to backend (Create Task)
    const addTask = (newTask) => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            // Send the new task to the backend API
            fetch(`http://localhost:8080/api/tasks/user/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            })
            .then(response => response.json()) // Parse response to JSON
            .then(data => {
                // Add the new task to the current list of tasks
                setTasks(prevTasks => [...prevTasks, data]);
            })
            .catch(error => console.error("Error creating task:", error));
        } else {
            console.error("User ID not found in localStorage");
        }
    };
    
    

    // Update Task
    const saveEdit = (id) => {
        fetch(`http://localhost:8080/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: updatedTitle })
        })
        .then(response => response.json())
        .then(updatedTask => {
            console.log("Updated Task:", updatedTask); // Log the response to check what is returned
            setTasks(tasks.map(task => 
                task.id === id ? updatedTask : task
            ));
            setEditingTaskId(null);
            setUpdatedTitle("");
        })
        .catch(error => console.error("Error updating task:", error));
    };
    const cancelEdit = () => {
        setEditingTaskId(null);
        setUpdatedTitle("");
    };
   

    // Delete Task
    const confirmDelete = (id) => {
        fetch(`http://localhost:8080/api/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setTasks(tasks.filter(task => task.id !== id));
            setTaskToDelete(null);
        })
        .catch(error => console.error("Error deleting task:", error));
    };

    // Toggle Completion
    const toggleCompletion = (id) => {
        const taskToToggle = tasks.find(task => task.id === id);
        if (taskToToggle) {
            const updatedTask = {
                ...taskToToggle,
                completed: !taskToToggle.completed
            };
            fetch(`http://localhost:8080/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            })
            .then(response => response.json())
            .then(data => {
                setTasks(tasks.map(task => 
                    task.id === id ? data : task
                ));
            })
            .catch(error => console.error("Error toggling completion:", error));
        }
    };

    // Filter and Search
    const filteredTasks = tasks.filter(task => {
        if (filter !== "All" && task.category !== filter) return false;
        if (task.title && !task.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });
    

    const completedTasks = filteredTasks.filter(task => task.completed);
    const incompleteTasks = filteredTasks.filter(task => !task.completed);

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <TaskForm addTask={addTask} />
            
            <div className="filters">
                <input 
                    type="text" 
                    placeholder="Search tasks..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                </select>
            </div>

            <h3>Tasks</h3>
            <ul className="task-list">
                {incompleteTasks.map(task => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleCompletion(task.id)} 
                        />
                        <span>{task.title}</span>
                        <button onClick={() => {
                            setEditingTaskId(task.id);
                            setUpdatedTitle(task.title);
                        }}>✏️</button>
                        <button onClick={() => setTaskToDelete(task)}>🗑️</button>
                    </li>
                ))}
            </ul>

            
            <ul className="task-list completed-tasks">
                {completedTasks.map(task => (
                    <li key={task.id} className="completed">
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => toggleCompletion(task.id)} 
                        />
                        <span>{task.title}</span>
                        <button onClick={() => setTaskToDelete(task)}>🗑️</button>
                    </li>
                ))}
            </ul>
            {editingTaskId && (
                <div className="edit-modal">
                    <div className="edit-modal-content">
                        <h3>Edit Task</h3>
                        <input 
                            type="text" 
                            value={updatedTitle} 
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                        />
                        <div className="modal-buttons">
                            <button onClick={() => saveEdit(editingTaskId)}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {taskToDelete && (
                <div className="delete-modal">
                    <div className="delete-modal-content">
                        <h3>Delete Task</h3>
                        <p>Are you sure you want to delete: <strong>{taskToDelete.title}</strong>?</p>
                        <button onClick={() => confirmDelete(taskToDelete.id)}>Yes, Delete</button>
                        <button onClick={() => setTaskToDelete(null)}>Cancel</button>
                    </div>
                </div>
            )}
            {showLoginModal && (
                <div className="login-modal">
                    <div className="login-modal-content">
                        <h3>Access Restricted</h3>
                        <p>You must be logged in to access this page.</p>
                        <button onClick={handleLoginRedirect}>Login Now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
