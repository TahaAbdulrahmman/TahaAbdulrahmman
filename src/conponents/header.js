import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import "../App.css"
import "../App.css"
import { NavLink } from "react-router-dom";
import logo from "../imgs/logo.jpg"
import Image from 'react-bootstrap/Image';
export default function Header(){
const btnnav = document.querySelectorAll('a');
function toggleClass(event) {
  btnnav.forEach((element) => {
    element.classList.remove('active');
  });
  event.target.classList.add('active');
}
btnnav.forEach((element) => {
  element.addEventListener('click', toggleClass);
});
  return (
  <div className="bg-main  py-2">
  <Container>
    <Row className="head">
      <Col xs="2" md="3">
        <div className="logo">
          <Image className="h-100" src={logo} roundedCircle />
        </div>
      </Col>
      <Col xs="10" md="9" className="my-auto">
        <div className="text-end">
          <NavLink className='btnnav transition-5 fw-bold m-0 me-1 m-lg-3 px-2 px-lg-3 py-1 py-lg-2 rad-10 text-capitalize text-decoration-none' to="/">home</NavLink>
          <NavLink className='btnnav transition-5 fw-bold m-0 me-1 m-lg-3 px-2 px-lg-3 py-1 py-lg-2 rad-10 text-capitalize text-decoration-none' to="/about">about</NavLink>
          <NavLink className='btnnav transition-5 fw-bold m-0 me-1 m-lg-3 px-2 px-lg-3 py-1 py-lg-2 rad-10 text-capitalize text-decoration-none' to="/projects">projects</NavLink>
          <NavLink className='btnnav transition-5 fw-bold m-0 me-1 m-lg-3 px-2 px-lg-3 py-1 py-lg-2 rad-10 text-capitalize text-decoration-none' to="/skills">skills</NavLink>
          <NavLink className='btnnav transition-5 fw-bold m-0 me-1 m-lg-3 px-2 px-lg-3 py-1 py-lg-2 rad-10 text-capitalize text-decoration-none' to="/contact" >contact</NavLink>
        </div>
      </Col>
    </Row>
  </Container> 
  </div>
  );
}