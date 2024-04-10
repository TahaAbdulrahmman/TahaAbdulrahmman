import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutimg from "../imgs/about.svg"
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init()
  })
  return (
  <div className='about vh100'>
    <Container className='d-flex justify-content-center align-items-center '>
      <Row  className=''> 
        <Col sm="0" lg="6" className='d-none d-lg-block'>
          <div className="image d-flex justify-content-center align-items-center"  data-aos="fade-left"  data-aos-duration="500">
            <img className='h-100 aboutimg' src={aboutimg} alt=''/>
          </div>
        </Col>
        <Col sm="12" lg="6" data-aos="fade-right"  data-aos-duration="600">
          <div className="info my-2" >
            <p className='fullfil c-p fs-4 fw-bold border px-3 px-lg-4 py-1 rad-10 position-relative'>Name : Taha Abdulrahman</p>
            <p className='fullfil c-p fs-4 fw-bold border px-3 px-lg-4 py-1 rad-10 position-relative'>Junior Front End Developerwith Quite A Bit Of Experience Creating Scalable Web Applications I Am Always Updating And Improving My Technical Skills In HTML5, CSS3, JS</p>
            <p className='fullfil c-p fs-4 fw-bold border px-3 px-lg-4 py-1 rad-10 position-relative'>Email : tahaabdalrahman97@gmail.com</p>
            <p className='fullfil c-p fs-4 fw-bold border px-3 px-lg-4 py-1 rad-10 position-relative'>Age : 27</p>
            <p className='fullfil c-p fs-4 fw-bold border px-3 px-lg-4 py-1  mb-4 rad-10 position-relative'>Adrress : Egypt</p>
            <Link className="btnpriv py-2 px-3 fw-bold fs-3 rad-10 transition-5 text-capitalize" to="/contact">contact me</Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default About