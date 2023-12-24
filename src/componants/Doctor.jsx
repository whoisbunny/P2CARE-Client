import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

function Doctor1(props) {
    return (
        <>
            <Card className='doctorlist m-3 mt-5 mb-5' style={{ width: '18rem' }}>
                <Card.Img className='img-1' variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className='text-center'>{props.title}</Card.Title>
                    <Card.Text className='text-center'>{props.sec} </Card.Text>
                    <div className="ratingstar mb-3 text-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <button className='btn-1'><a href={props.profile}>View Profile</a></button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Doctor1
