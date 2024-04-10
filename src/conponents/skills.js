import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {dataskilss} from "./dataskill"
import Aos from 'aos'
import "aos/dist/aos.css"
const Skills = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
    <div className='skills vh100 c-p'>
      <Container>
        <div className="text-center my-5">
          <h1 className="fw-bold text-capitalize fs-1 c-main">My skills</h1>
        </div>
        <Row className="text-uppercase">
        {
          dataskilss.map((item,index)=>{
            return(
              <Col key={index} xs="6" md="4" lg="3" className='mb-3 '>
                <div className=" w-100 text-center"  data-aos="fade-up"  data-aos-duration="600">
                  <img className="imgskill rad-10 " src={item.src} alt=""/>
                  <p className="title fs-2 mt-3">{item.title}</p>
                </div>
              </Col>
            )
          })
        }
        </Row>
      </Container>
    </div>
  )
}

export default Skills