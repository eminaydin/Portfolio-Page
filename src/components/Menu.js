import React, { useState } from 'react';
import { FiLinkedin } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai"
import {
    Link
} from "react-router-dom";
const Menu = (props) => {
    const [stateObject, setstateObject] = useState({
        leftIsClicked: false,
        rightIsClicked: false
    });


    const toggleLeft = () => {
        setstateObject({
            leftIsClicked: !stateObject.leftIsClicked
        })
    }

    const toggleRight = () => {
        setstateObject({
            rightIsClicked: !stateObject.rightIsClicked
        })
    }
    console.log(props.params);



    return (<div>
        <div id="circularMenu" className={`circular-menu ${stateObject.rightIsClicked ? "active" : ""}`}>
            <a className="floating-btn" onClick={toggleRight}>
                <i className="fa fa-plus"></i>
            </a>
            <menu className="items-wrapper">

                <a className="menu-item" href="https://www.linkedin.com/in/emin-aydin/" target="_blank"> <FiLinkedin size="1.5em" style={{ margin: " 10px" }} /> </a>
                <a className="menu-item"> <MdEmail size="1.5em" style={{ margin: " 10px" }} /> </a>
                <a className="menu-item" href="https://github.com/eminaydin" target="_blank"> <AiFillGithub size="1.5em" style={{ margin: " 10px" }} /> </a>
            </menu>
        </div>
        <div id="circularMenu1" className={`circular-menu circular-menu-left ${stateObject.leftIsClicked ? "active" : ""}`}>
            <a className="floating-btn" onClick={toggleLeft}>
                <i className="fa fa-bars"></i>
            </a>
            <menu className="items-wrapper">
                <Link to="/" className="menu-item fa fa-home"> <a href="#"  ></a> </Link>
                <Link to="/about" className="menu-item fa fa-user"> <a href="#" ></a></Link>
                <Link to="/portfolio" className="menu-item fa fa-pie-chart"> <a href="#" ></a></Link>
                <Link to="/contact" className="menu-item fa fa-cog"> <a href="#" ></a></Link>
            </menu>
        </div>
    </div>
    );
}

export default Menu;
