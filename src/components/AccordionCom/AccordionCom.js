import React from "react";
import {Accordion, Card} from "react-bootstrap";
import styled from "styled-components";
import {motion} from "framer-motion";
import {title4} from "../AnimationCom/Animation";

const AcardionCom = () => {
    return (
        <AboutAcc className="asq">
            <motion.div variants={title4} animate="show" initial="hidden" className="container-fluid margin">
                <h1>Any Questions? <br />
                    <b>FAQ</b></h1>
                <Accordion defaultActiveKey="0">
                    <div className="bbb card border-0 bg-transparent text-white">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            How Do I Start?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    reprehenderit perferendis
                                    sunt magni dolores ratione.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        <div className="faq-line">

                        </div>
                    </div>
                    <div className="bbb card border-0 bg-transparent text-white">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            What Products do you offer?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    reprehenderit perferendis
                                    sunt magni dolores ratione.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        <div className="faq-line">

                        </div>
                    </div>
                    <div className="bbb card border-0 bg-transparent text-white">
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Diferrent Payment Methods
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    reprehenderit perferendis
                                    sunt magni dolores ratione.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        <div className="faq-line">

                        </div>
                    </div>
                    <div className="bbb card border-0 bg-transparent text-white">
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Daily Schedule
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet.</p>
                                <p className="Acordion-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                    reprehenderit perferendis
                                    sunt magni dolores ratione.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        <div className="faq-line">

                        </div>
                    </div>

                </Accordion> <br/><br/>
            </motion.div>
        </AboutAcc>
    )
}

const AboutAcc = styled.div`
  h1 {
    color: #fff;
    font-size: 64px;
    margin: 0 0 55px 0;

    b {
      color: rgb(35, 217, 151);
    }
  }
  .container-fluid {
    max-width: 85%;
    background-color: transparent !important;
 
    .bbb {
      transform-origin: 50% 0 0;
      font-size: 2.5rem;
      font-family: Inter, sans-serif;
      cursor: pointer;

      .Acordion-p {
        color: rgb(204, 204, 204);
        font-size: 1.4rem;
        line-height: 150%;
      }

      .faq-line {
        background: rgb(204, 204, 204);
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
      }
    }
  }
`

export default AcardionCom;