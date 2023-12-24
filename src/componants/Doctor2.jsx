import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

function Doctor2(props) {
  return (
    <>
     <Card className='doctorlist_1 m-3 mt-4' style={{ width: '18rem' }}>
                <Card.Img className='img-1' variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className='text-center'>{props.title}</Card.Title>
                    <Card.Text className='text-center color'>{props.sec} </Card.Text>
                    <div className="ratingstar mb-3 text-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <a href={props.profile}><button className='btn-2'>View Profile</button></a>
                </Card.Body>
            </Card> 
    </>
  )
}

export default Doctor2
