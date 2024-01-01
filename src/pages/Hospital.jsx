import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
// import Article from './Article';
// import Reiew from './Reiew';
import Abouthos from './About_hos'
import { Link } from 'react-router-dom/cjs/react-router-dom';
// import Docselect from '../componants/Docselect';

function Hospital() {
    return (
        <>
            <div className='head'>
                <div className='pageindi'>
                    <Container>
                        <div className='htha d-flex'>
                            <Link to='/' className='text-white fw-bold me-2'>Home</Link>
                            <div className='text-white'>
                                <FaChevronRight />
                            </div>
                            <Link to='/err' className='text-white fw-bold ms-2'>Shalby Hospital Mohali</Link>
                        </div>
                    </Container>
                </div>
                <div className='hospital_mohali'>
                    <Container>
                        <div className='d-flex justify-content-between mt-5'>
                            <div className='mb-0'>
                                <div className='hs_box'>
                                    <div className='d-flex'>
                                        <img src="assets/img/sshalby.png" className='hos_img' height={200} width={200} alt="" />
                                        <div className='address'>
                                            <h5>Shalby Hospital Mohali</h5>
                                            <p>Silver Oaks Hospital, Phase-IX, <br /> Sector-63, SAS Nagar, Mohali, <br /> Punjab, 160062, India</p>
                                            <button type='submit' className='btn-3'>View Direction</button>
                                        </div>
                                        <div className='rating'>
                                            <div className="ratingstar text-center">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <p className='fw-bold'>5 (125) Reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hsinfobox mt-5">
                                    <Link to="/abouthos" className='text-dark ms-5 fw-bold'>Overview</Link>
                                    <Link to="/docselect" className='text-dark fw-bold'>Doctors</Link>
                                    <Link to="/review" className='text-dark fw-bold'>Reviews</Link>
                                    <Link to="/Articles" className='text-dark fw-bold'>Articles</Link>
                                </div>
                            </div>
                            <div className='ms-5'>
                                <div className="req_box ">
                                    <button type='submit' className='btn-4'>Request Callback</button>
                                </div>
                                <div className="ser_box mt-5 mb-5">
                                    <p className='fw-bolder'>Available Services</p>
                                    <hr />
                                    <ul className='fw-bold'>
                                        <li><FaAmbulance/>Ambulance</li>
                                        <li><i class="fa-solid fa-truck-medical"></i>ICU</li>
                                        <li><i class="fa-solid fa-truck-medical"></i>Reception</li>
                                        <li><i class="fa-solid fa-truck-medical"></i>Operation Theatres</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Abouthos />
                        {/* <Docselect/> */}
                        {/* <Reiew/> */}
                        {/* <Article /> */}
                        <div className='mt-5'>
                            <h1 className='faq'>FAQS</h1>
                            <Accordion defaultActiveKey="0" className='faqdisc'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>1. What is Lorem Ipsum?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>2. What is Lorem Ipsum?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>3. What is Lorem Ipsum?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>4. What is Lorem Ipsum?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>5. What is Lorem Ipsum?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Container>
                </div>
            </div >
        </>
    )
}

export default Hospital
