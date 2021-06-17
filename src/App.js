import React from "react"
import Navbar from "./components/NavbarCom/Navbar.js"
import Work from "./pages/OurWorkCom/OurWork.js"
import About from "./pages/AboutUSCom/AboutUs.js"
import Contact from "./pages/ContactUSCom/ContactUs.js"
import { Route, Switch } from "react-router-dom"

const App = () => {
    return (
        <div className='Appp'>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/work">
                    <Work />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    )
}

export default App
