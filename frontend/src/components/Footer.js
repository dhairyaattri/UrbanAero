import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <hr />
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; UrbanAero</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
