import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';

function About() {
  const a = useContext(noteContext);
  return (   
    <div>
      <h1>iNotebook</h1>
      <p>iNotebook
      Welcome to iNotebook, your personal, secure, and responsive note-taking app. This project is designed to provide a seamless experience for managing your notes. Whether you're jotting down a quick reminder or compiling detailed information, iNotebook caters to all your needs.</p>
      <h1>Features</h1>
      <p>Create, Read, Update, Delete (CRUD) Operations: Full control over your notes. Add new notes, view them, edit existing ones, or delete them.
      <br/>
      User Authentication: Sign up and log in functionality to ensure that your notes are secure and private.</p>
      <h1>Technologies Used</h1>
      <p>iNotebook is a MERN stack application, leveraging the following technologies:
<br/>
MongoDB: A document database used to store your notes in a flexible and scalable way.
<br/>
Express.js: This back-end web application framework for Node.js helps in managing routes and requests.
<br/>
React: A JavaScript library for building user interfaces, ensuring a smooth and dynamic experience.
<br/>
Node.js: The JavaScript runtime that executes your server-side code.</p>
    </div>
  )
}

export default About
