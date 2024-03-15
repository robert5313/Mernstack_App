import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseCard = ({ title, description, image, buttonText }) => {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;