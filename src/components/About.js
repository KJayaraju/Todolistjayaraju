// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About To-Do List App</h1>
      <p>
        Welcome to our To-Do List App, your ultimate productivity companion! Our application is designed to help you organize your tasks, manage your time efficiently, and achieve your goals with ease. Whether you’re a student, a professional, or someone juggling multiple responsibilities, our To-Do List App keeps you on track and focused.
      </p>
      <div class="contain">
         <div class="card__container">
            <article class="card__article">
               <img src="https://tse1.mm.bing.net/th?id=OIP.A9jD6EZdgdWC-_JM0ywfvQAAAA&pid=Api&P=0&h=180" alt="image" class="card__img"></img>

               <div class="card__data">
               <h2>Features</h2>
      <ul>
        <li><strong>Task Management:</strong> Easily add, edit, and delete tasks to keep your list up-to-date.</li>
        
        <li><strong>Search Functionality:</strong> Quickly find tasks using keywords or phrases.</li>
       
      </ul>
               </div>
            </article>

            <article class="card__article">
               <img src="https://thumbs.dreamstime.com/b/purpose-word-white-background-purpose-white-204176204.jpg" alt="image" class="card__img"></img>

               <div class="card__data">
               <h2>Our Purpose</h2>
      <p>
        Our mission is to simplify task management and help users maximize their productivity. We understand the challenges of staying organized in today’s fast-paced world.
      </p>
               </div>
            </article>

            <article class="card__article">
               <img src="https://tse1.mm.bing.net/th?id=OIP.XlNNMktizHtTNOP026xhLQHaEA&pid=Api&P=0&h=180" alt="image" class="card__img"></img>

               <div class="card__data">
               <h2>Why Choose Our To-Do List App?</h2>
      <p>
        Unlike traditional paper lists or complex task managers, our app offers a simple yet powerful way to organize your life.
      </p>
               </div>
            </article>
            <article class="card__article">
               <img src="https://static.vecteezy.com/system/resources/previews/021/013/589/original/click-touch-icon-isolated-on-transparent-background-free-png.png" alt="image" class="card__img"></img>

               <div class="card__data">
               <h2>Get In Touch</h2>
      <p>
        We value your feedback! If you have any questions, suggestions, or need assistance, feel free to contact us.
      </p>
               </div>
            </article>
            <article class="card__article">
               <img src="https://thumbs.dreamstime.com/b/important-sticker-important-square-sticker-isolated-white-background-important-120413470.jpg" alt="image" class="card__img"></img>

               <div class="card__data">
                  <h2>Importance</h2>
                  <p>It helps you keep track of tasks in one place, reducing the risk of forgetting important activities.</p>
               </div>
            </article>
            <article class="card__article">
               <img src="https://tse4.mm.bing.net/th?id=OIP.mEnd3WpXj0rfBiw-no59ugHaE7&pid=Api&P=0&h=180" alt="image" class="card__img"></img>

               <div class="card__data">
               <h2>Stay Organized, Stay Productive!</h2>
      <p>
        Start using our To-Do List App today and experience the difference!
      </p>
               </div>
            </article>
         </div>
         
      </div>
      
    </div>
  );
};

export default About;
