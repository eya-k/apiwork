import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Element = ({el}) => {
  return (
    <div>
    <Card style={{ width: '18rem'  }} >
      <Card.Img className='cardimg' variant="top" src="https://ipaidthat.io/mag/wp-content/uploads/2020/05/API-Particeep-1024x576.jpg" width={250}height={250}      />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Title>{el.username}  </Card.Title>
        <Card.Text>
         {el.catchPhrase}
        </Card.Text>
        <Button variant ="primary">Click me </Button  >
      </Card.Body>
    </Card>
        </div>
  )
}

export default Element