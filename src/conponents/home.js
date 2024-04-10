import React, { useEffect } from 'react'
import {Container } from 'react-bootstrap'
import land from "../imgs/land.png"
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import MyPDF from '../resume.pdf';    
let Home = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="home vh100">
    <Container className=' d-flex justify-content-center align-items-center'>
      <div className="info mt-lg-5  bg-therd p-1 p-lg-5"  data-aos="fade-left"  data-aos-duration="600">
        <p className='c-second fs-3 fw-bold my-0'>Hello </p>
        <h1 className='name c-second fs-1 m-0 fw-bold '>I'am Taha AbdulRahman</h1>
        <p className='c-second fs-3 fw-bold my-0 '>Front End Developer ( React.JS )</p>
        <p className=" c-p mt-1 fs-3 fw-bold lh-1 mt-lg-3">I'm a front-end developer with less than 1 year of experience. I have strong skills in HTML5, CSS3, and JavaScript, as well as basic knowledge of modern frameworks such as ReactJS &, Redux. I also have experience in design and usability techniques.</p>
        <div className="ms-4" >
          <a href={MyPDF} download="Taha-AbdulRahman.pdf">
          <button className="btnpriv cv mx-3 my-1 rad-10 px-3 py-2 transition-5 fs-4 fw-bold">Dounload Resume</button>
        </a>  
          <Link to="/contact ">
          <button className="btnpriv mx-2 my-1 rad-10 px-3 py-2 transition-5 fs-4 fw-bold">Contact Me</button>
          </Link>
        </div>
      </div>
      <div className="image d-flex justify-content-center align-items-center" data-aos="fade-right"  data-aos-duration="600">
        <img className='land mh-100 d-none d-lg-block' src={land} alt=''/>
      </div>
    </Container>
    </div>
  )
}

export default Home