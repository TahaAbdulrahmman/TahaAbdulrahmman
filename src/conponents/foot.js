import { faFacebook, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Foot = () => {
  return (
  <div className="bg-main p-2 w-100">
    <Container className="foot w-100" >
      <Row>
        <Col sm="10" lg="6">
          <p className='fs-2 fw-bold text-center c-dark m-0' >Made By Taha Abdulrahmman ©2024</p>
        </Col>
        <Col sm="10" lg="6">
          <div className='icons d-flex justify-content-center align-items-center'>
            <a className='mx-1 p-2 rad-10 d-flex justify-content-center align-items-center transition-5' href='https://www.facebook.com/profile.php?id=100012525938175'>
              <FontAwesomeIcon icon={faFacebook} className="facebook"/>
            </a>
            <a className='mx-1 p-2 rad-10 d-flex justify-content-center align-items-center transition-5' href='https://www.instagram.com/taha_abdulrahmman/'>
              <FontAwesomeIcon icon={faInstagram} className="instagram"/>
            </a>
            <a className='mx-1 p-2 rad-10 d-flex justify-content-center align-items-center transition-5' href='https://github.com/TahaAbdulrahmman'>
              <FontAwesomeIcon icon={faGithub} className="github"/>
            </a>
            <a className='mx-1 p-2 rad-10 d-flex justify-content-center align-items-center transition-5' href='https://wsend.co/201019893766'>
              <FontAwesomeIcon icon={faWhatsapp} className="whatsapp"/>
            </a>
            <a className='mx-1 p-2 rad-10 d-flex justify-content-center align-items-center transition-5' href='https://www.linkedin.com/in/taha-abdulrahman/'>
              <FontAwesomeIcon icon={faLinkedinIn} className="linkedinIn"/>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Foot