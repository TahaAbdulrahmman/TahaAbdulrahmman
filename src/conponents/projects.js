import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import nmec from "../imgs/work/nmec.webp"
import elzero from "../imgs/work/elzero.webp"
import elsultan from "../imgs/work/elsultan.png"
import Aos from 'aos'
import 'aos/dist/aos.css'
const Projects = () => {
    useEffect(()=>{
      Aos.init()
    })
  return (
    <div className='vh100'>
      <Container className='my-2'>
        <Row>
          <Col sm="12" md="6" lg="4" className='mb-3'> 
          <div className="rad-10  bg-therd"  data-aos="fade-up"  data-aos-duration="500">
          <a href="https://tahaabdulrahmman.github.io/NMEC/">
            <img className="imgproj rad-10 w-100" src={nmec} alt=""/>
            <div className="w-100 fs-2 fw-bold rad-10 m-0 text-center">
            <p className="m-0 text-uppercase">nmec</p>
          </div>
          </a>
          </div>
          </Col>
          <Col sm="12" md="6" lg="4" className='mb-3' >
            <div className="rad-10 bg-therd"  data-aos="fade-up"  data-aos-duration="500">
            <a href="https://elsultan-2104a.web.app/">
              <img className="imgproj rad-10 w-100" src={elsultan} alt=""/>
              <div className="w-100 fs-2 fw-bold rad-10 m-0 text-center">
                <p className="m-0 text-uppercase">El Sultan</p>
              </div>
            </a>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" className='mb-3' >
            <div className="rad-10 bg-therd"  data-aos="fade-up"  data-aos-duration="500">
            <a href="https://tahaabdulrahmman.github.io/Elzero/">
              <img className="imgproj rad-10 w-100" src={elzero} alt=""/>
              <div className="w-100 fs-2 fw-bold rad-10 m-0 text-center">
                <p className="m-0 text-uppercase">elzero</p>
              </div>
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects