import React from 'react'
import styled from 'styled-components'

const ContactUs = () => {
    return (
        <div className='Contactus'>
            <Contactus>
            <h1>Get in touch.</h1>
            <ul>
                <li>Socials</li>
                <li>Send us a message</li>
                <li>Drop an email.</li>
            </ul>
            </Contactus>
        </div>
    )
}

const Contactus = styled.div`
    font-size: 80px;
    align-items: center;
    margin-left: 100px;
    margin-top: 20px;
    
`
export default ContactUs
