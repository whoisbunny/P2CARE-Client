import React from 'react'
import { Container } from 'react-bootstrap'

function Abouthos() {
    return (
        <>
            <Container>
                <div className='hs_info mt-5'>
                    <h5 className='fw-bolder ms-5 mt-4'>About Hostpital</h5>
                    <div className='mt-4'>
                        <div className='d-flex justify-content-'>
                            <img src="assets/img/hospital.png" className='m-auto' width="205px" height="205px" alt="" />
                            <div className='hos_disc'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Abouthos
