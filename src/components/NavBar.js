import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () =>{

    return (
 <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="./logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' Charles Video Viewer'}
    </Navbar.Brand>
  </Navbar>
    );
}

export default NavBar;