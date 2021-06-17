import React from 'react'
import styled from 'styled-components'
import Img1 from '../../img/photo_2021-05-21_18-27-10.jpg'
import {AboutUs, Container, Hide} from "../StylesComJS/styles"
import {motion} from "framer-motion"
import {title, title1, title2} from "../AnimationCom/Animation";
import Waves from "../WaversCom/Waves";


const Header = () => {
    return (
        <Container className="asq">
            <AboutUs>
                <Haw className="ml-5">
                    <Hide>
                        <motion.h1 variants={title} animate="show" initial="hidden">We work to make</motion.h1>
                    </Hide>
                    <Hide>
                        <motion.h1 variants={title} animate="show" initial="hidden">your <b>dreams</b> come</motion.h1>
                    </Hide>
                    <Hide>
                        <motion.h1 variants={title} animate="show" initial="hidden">true.</motion.h1>
                    </Hide>
                    <Hide>
                        <motion.p variants={title2} animate="show" initial="hidden">Contact us for any photography or
                            videography<br/>
                            ideas that you have. We have professionals with <br/>
                            amazing skills to help you achieve it.
                        </motion.p>
                    </Hide>
                    <br/><br/>
                    <Hide>
                        <motion.button variants={title} animate="show" initial="hidden" className='btnhead'>Contact us
                        </motion.button>
                    </Hide>
                </Haw>
                <Hide className="ml-5">
                    <motion.img variants={title1} animate="show" initial="hidden" className="img" src={Img1}/>
                </Hide>

            </AboutUs>
            <Waves/>
        </Container>

    )
}

const Haw = styled.div`
  margin-bottom: 30px;
  align-items: center;
  color: white;

  h1 {
    font-size: 4rem;

    b {
      color: rgb(35, 217, 151);
    }
  }

  p {
    font-size: 28px;
    color: #CCCCCC;
  }
`

const Div = styled.div`
width: 10px;
  height: 10px;
  h1{
    width: 0;
    height: 2px;
  }
`


export default Header;