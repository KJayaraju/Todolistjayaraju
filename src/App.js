import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/Tasklist';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import Task from './components/Task';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<><TaskList key={refresh} /></>} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/task"   element={<Task />}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
