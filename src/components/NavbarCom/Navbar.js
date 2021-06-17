import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion";
import {AnimationBorderB} from "../AnimationCom/Animation";
import {Hide} from "../StylesComJS/styles";


const Navbar = () => {
    return (
        <Nav className="navbar">
            <div>
                <h1 className="murka">Capture</h1>
            </div>
            <div>
                <ul>
                    <li><Link to="/"><b> 1. About us</b><Hide>
                        <motion.hr variants={AnimationBorderB} animate="show" initial="hidden"/>
                    </Hide></Link>
                    </li>
                    <li><Link to="/work"><b>2. Our Work</b></Link></li>
                    <li><Link to="/contact"><b>3. Contact Us</b></Link></li>
                </ul>
            </div>
        </Nav>

    )

}


const Nav = styled.div`
  text-align: center;
  align-items: center;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #333;
  color: #fff;

  h1 {
    font-size: 2rem;
  }

  ul {
    display: flex;

    li {
      list-style: none;
      padding: 1rem;
      font-size: 1.5rem;

      a, b {
        text-decoration: none;
        color: #fff;
      }

      &:hover {
        background: #999;
        color: #fff
      }
    }

    hr {
      width: 100%;
      height: 0.250rem;
      margin: 0 0 0 0;
      background: rgb(35, 217, 151);
    }

    hr:focus {
      width: 100%;
      height: 0.250rem;
      margin: 0;
      background: rgb(35, 217, 151);
    }
  }

`

export default Navbar