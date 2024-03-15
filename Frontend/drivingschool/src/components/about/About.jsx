import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div className='Container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  <Card style={{ width: '20rem', margin: '10px' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1587376865569-3ea88a29c6f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card.Body>
      <Card.Title>Welcome to [Affinity Driving School]</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem', margin: '10px' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card.Body>
      <Card.Title>Welcome to [Affinity Driving School]</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem', margin: '10px' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card.Body>
      <Card.Title>Welcome to [Affinity Driving School]</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>
      );
}

export default About