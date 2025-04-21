<<<<<<< HEAD
import React, { useState,useEffect } from 'react';
import './Task.css';

const Task = () => {
    const [page, setPage] = useState(0);

    const nextPage = () => {
        if (page < 3) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 0) setPage(page - 1);
    };
    const storedUsername = localStorage.getItem("username");
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
            const userId = localStorage.getItem('userId');
            if (userId) {
                const fetchTasks = async () => {
                    try {
                        const response = await fetch(`http://localhost:8080/api/tasks?userId=${userId}`);
                        if (response.ok) {
                            const data = await response.json();
                            console.log(data);
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
        

    return (
        <div className='book_body'>
            <div className="book-container">
                <div className="book">
                    <div className={`cover ${page > 0 ? 'flipped' : ''}`} onClick={nextPage}>
                        <h2>Welcome {storedUsername}!</h2>
                        
                    </div>
                    <div className={`page ${page > 0 ? 'flipped' : ''}`} id="page1">
                        <div className="front-page">
                            <p>Page 1: Lorem ipsum dolor sit amet consectetur.</p>
                            <button className="next" onClick={nextPage}>Next</button>
                        </div>
                        <div className="back-page">
                            <img src="https://toggl.com/blog/wp-content/uploads/2018/09/project-task-list.jpg" alt="Page 1" />
                            <button className="prev" onClick={prevPage}>Prev</button>
                        </div>
                    </div>
                    
                    
                    <div className={`page ${page === 2 ? 'flipped' : ''}`} id="page2">
    <div className="front-page">
        <h2>Tasks Added by {storedUsername}</h2>
        <ul>
            {tasks.length > 0 ? (
                tasks.map((task, index) => {
                    // Format the created date
                    const createdDate = new Date(task.createdAt).toLocaleDateString();
                    
                    return (
                        <li key={index} className="task-item">
                            <p className={task.completed ? "completed-task" : ""}>
                                Task: {task.title}
                            </p>
                            <p>Created Date: {createdDate}</p>
                            
                        </li>
                    );
                })
            ) : (
                <p>No tasks available.</p>
            )}
        </ul>
        <button className="next" onClick={nextPage}>Next</button>
    </div>
    <div className="back-page">
        <img src="https://via.placeholder.com/350x450" alt="Page 2" />
        <button className="prev" onClick={prevPage}>Prev</button>
    </div>
</div>

                    <div className="back-cover"></div>
                </div>
            </div>
        </div>
    );
};

export default Task;
=======
import React, { useState,useEffect } from 'react';
import './Task.css';

const Task = () => {
    const [page, setPage] = useState(0);

    const nextPage = () => {
        if (page < 3) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 0) setPage(page - 1);
    };
    const storedUsername = localStorage.getItem("username");
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
            const userId = localStorage.getItem('userId');
            if (userId) {
                const fetchTasks = async () => {
                    try {
                        const response = await fetch(`http://localhost:8080/api/tasks?userId=${userId}`);
                        if (response.ok) {
                            const data = await response.json();
                            console.log(data);
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
        

    return (
        <div className='book_body'>
            <div className="book-container">
                <div className="book">
                    <div className={`cover ${page > 0 ? 'flipped' : ''}`} onClick={nextPage}>
                        <h2>Welcome {storedUsername}!</h2>
                        
                    </div>
                    <div className={`page ${page > 0 ? 'flipped' : ''}`} id="page1">
                        <div className="front-page">
                            <p>Page 1: Lorem ipsum dolor sit amet consectetur.</p>
                            <button className="next" onClick={nextPage}>Next</button>
                        </div>
                        <div className="back-page">
                            <img src="https://toggl.com/blog/wp-content/uploads/2018/09/project-task-list.jpg" alt="Page 1" />
                            <button className="prev" onClick={prevPage}>Prev</button>
                        </div>
                    </div>
                    
                    
                    <div className={`page ${page === 2 ? 'flipped' : ''}`} id="page2">
    <div className="front-page">
        <h2>Tasks Added by {storedUsername}</h2>
        <ul>
            {tasks.length > 0 ? (
                tasks.map((task, index) => {
                    // Format the created date
                    const createdDate = new Date(task.createdAt).toLocaleDateString();
                    
                    return (
                        <li key={index} className="task-item">
                            <p className={task.completed ? "completed-task" : ""}>
                                Task: {task.title}
                            </p>
                            <p>Created Date: {createdDate}</p>
                            
                        </li>
                    );
                })
            ) : (
                <p>No tasks available.</p>
            )}
        </ul>
        <button className="next" onClick={nextPage}>Next</button>
    </div>
    <div className="back-page">
        <img src="https://via.placeholder.com/350x450" alt="Page 2" />
        <button className="prev" onClick={prevPage}>Prev</button>
    </div>
</div>

                    <div className="back-cover"></div>
                </div>
            </div>
        </div>
    );
};

export default Task;
>>>>>>> 9305cd3a566bbd30de8d09f44cb9d19ba9e48fbe
