import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Doctor2 from '../componants/Doctor2'
import Feedback from './Feedback'

function Doctor(props) {

    return (
        <>
            <div className='group'>
                <img src="assets/img/femaledoc.png" className='img-1' alt="img" width="100%" height="695px" />
                <div className='text'>
                    <div className='d-flex'>
                        <div className='mt-5'>
                            <h1>Search Best <br /> Doctors at Best <br /> Locations</h1>
                            <div className='info d-flex m-3 mt-4'>
                                <h3 className='doc_1'>400+ <br /> <span className='text-dark'>Doctors</span></h3>
                                <h3 className='spec_1'>50+ <br /> <span className='text-dark'>Specialist</span></h3>
                                <h3>45+ <br /> <span className='text-dark'>Cities</span></h3>
                            </div>
                        </div>
                        <div className='location'>
                            <div className='spacing'>
                                <div className='mx-4 my-3'>
                                    <label htmlFor="selectDisease" className='spelab'>Specialist</label>
                                    <Form.Select
                                        id="selectDisease"
                                        className="selector_1"
                                    // onChange={(e) => setSelectDisease(e.currentTarget.value)}
                                    >
                                        {[
                                            'Name or disease',
                                            'top-center',
                                            'top-end',
                                            'middle-start',
                                            'middle-center',
                                            'middle-end',
                                            'bottom-start',
                                            'bottom-center',
                                            'bottom-end',
                                        ].map((p) => (
                                            <option key={p} value={p}>
                                                {p}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className='mx-4 my-3'>
                                    <label htmlFor="selectDisease" className='spelab'>Specialist</label>
                                    <Form.Select
                                        id="selectDisease"
                                        className="selector_1"
                                    // onChange={(e) => setSelectDisease(e.currentTarget.value)}
                                    >
                                        {[
                                            'Name or disease',
                                            'top-center',
                                            'top-end',
                                            'middle-start',
                                            'middle-center',
                                            'middle-end',
                                            'bottom-start',
                                            'bottom-center',
                                            'bottom-end',
                                        ].map((p) => (
                                            <option key={p} value={p}>
                                                {p}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className='mx-4'>
                                    <Button type='submit' className='selector_1 btn fs-5 me-5'>Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='specilist'>
                        <div className='d-flex justify-content-center'>
                            <div className='i_box_1'>
                                <img src="assets/img/psychiatry.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Psychiatry</p>
                            </div>
                            <div className='i_box_1'>
                                <img src="assets/img/general.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Child Care</p>
                            </div>
                            <div className='i_box_1'>
                                <img src="assets/img/dentist.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Dentist</p>
                            </div>
                            <div className='i_box_1'>
                                <img src="assets/img/baby.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Pediatrics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='areadoc'>
                <p>Specialist Doctors in Your Area</p>
                <div className='doc_2'>
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/doctoreprofile" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/doctoreprofile" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/doctoreprofile" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/doctoreprofile" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/doctoreprofile" />
                </div>
            </div>
            <Feedback />
        </>
    )
}

export default Doctor
