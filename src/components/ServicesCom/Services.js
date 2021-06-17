import React from 'react'
import styled from 'styled-components'
import Img2 from '../../img/kamera.jpg'
import {AboutUs, Container} from "../StylesComJS/styles"
import {motion} from "framer-motion"
import {title3} from "../AnimationCom/Animation";
import Icon1 from "../../img/icon/icon1.svg"
import Icon2 from "../../img/icon/icon2.svg"
import Icon3 from "../../img/icon/icon3.svg"
import Icon4 from "../../img/icon/icon4.svg"
import {Button} from "react-bootstrap";

const Header = () => {
    return (
        <Container className="asq">
            <motion.div variants={title3} animate="show" initial="hidden">
                <AboutUs>
                    <Haw>
                        <h1>High <b>quality</b> services.</h1>
                        <div className="d-grid">
                            <div className="size-div">
                                <div className="size-div">
                                    <img className="icon-fas" src={Icon1} alt="icon"/>
                                    <Button variant="light"  className="size-siz">Efficient</Button>
                                </div>
                                <p>Lorem ipsum dolor<br/> sit amet</p>
                            </div>
                            <div className="size-div">
                                <div className="size-div">
                                    <img className="icon-fas" src={Icon2} alt="icon"/>
                                    <Button variant="light"  className="size-siz">Teamwork</Button>
                                </div>
                                <p>Lorem ipsum dolor<br/> sit amet</p>
                            </div>
                            <div className="size-div">
                                <div className="size-div">
                                    <img className="icon-fas" src={Icon3} alt="icon"/>
                                    <Button variant="light"  className="size-siz">Pro Grade Gear</Button>
                                </div>
                                <p>Lorem ipsum dolor<br/> sit amet</p>
                            </div>
                            <div className="size-div">
                                <div className="size-div">
                                    <img className="icon-fas" src={Icon4} alt="icon"/>
                                    <Button variant="light"  className="size-siz">Affordable</Button>
                                </div>
                                <p>Lorem ipsum dolor<br/> sit amet</p>
                            </div>
                        </div>
                    </Haw>
                    <img className="img" src={Img2} alt="kamera"/>
                </AboutUs>
            </motion.div>
        </Container>

    )
}

const Haw = styled.div`
  margin-bottom: 30px;
  align-items: center;
  color: white;

  h1 {
    font-size: 64px;
    padding: 0 0 80px;

    b {
      color: rgb(35, 217, 151);
    }
  }

  .d-grid {
    display: grid;
    grid-template-columns: auto auto;
  }

  p {
    color: rgb(204, 204, 204);
    font-size: 1.4rem;
    line-height: 150%;
  }

  .icon-fas {
    width: 70px;
    height: 70px;
  }

  .size-div {
    margin-bottom: 15px;
  }

  .size-siz {
    background-color: #fff;
    color: black;
    margin: 0 0 0 16px;
    padding: 16px;
    font-size: 19px;
    outline: none;
  }
  
`
export default Header;