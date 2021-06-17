import React from 'react'
import styled from 'styled-components'
import Img2 from '../../img/sevg.jpg'
import Img3 from '../../img/opa.jpg'
import Img4 from '../../img/boks.jpg'
import {motion} from "framer-motion";
import {AnimationBorder} from "../../components/AnimationCom/Animation";
import {Hide} from "../../components/StylesComJS/styles";

const OurWork = () => {
    return (
        <div className='Ourwork'>
            <Atletic>
                <div className="mt-5">
                    <h1>Good Times</h1><br/>
                    <Hide><motion.hr  variants={AnimationBorder} animate="show" initial="hidden" /></Hide>
                    <img src={Img4} alt="Photo"/>
                </div>
                <div className="mt-5">
                    <h1>The Racer</h1><br/>
                    <Hide><motion.hr  variants={AnimationBorder} animate="show" initial="hidden" /></Hide>
                    <img src={Img3} alt="Photo"/>
                </div>
                <div className="mt-5">
                    <h1>The Athlete</h1><br/>
                    <Hide><motion.hr  variants={AnimationBorder} animate="show" initial="hidden" /></Hide>
                    <img src={Img2} alt="Photo"/>
                </div>
            </Atletic>
        </div>
    )
}

const Atletic = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0 10% 0;
  padding: 2rem;

  img {
    width: 100%;
    margin: 0 auto;
    height: 600px;
    object-fit: cover;
  }

  h1 {
    font-size: 80px;
    font-weight: 400;
  }

  hr {
    height: 0.5rem;
    margin: 0 0 48px 0;
    background: rgb(35, 217, 151);
  }

`
export default OurWork
