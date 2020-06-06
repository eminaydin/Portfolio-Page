import React, { useState, useEffect } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("home");
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
    const location = window.location.pathname;
    useEffect(() => {
        if (location === "/about") return setActiveItem("about")
        if (location === "/") return setActiveItem("home")
        if (location === "/contact") return setActiveItem("contact")
        if (location === "/portfolio") return setActiveItem("portfolio")
    }, [location]);

    return (
        <Segment inverted className="navbar">
            <Menu inverted pointing secondary>
                <Link to="/">  <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                /></Link>
                <Link to="/about"> <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={handleItemClick}
                /></Link>
                <Link to="/portfolio">  <Menu.Item
                    name='portfolio'
                    active={activeItem === 'portfolio'}
                    onClick={handleItemClick}
                /></Link>
                <Link to="/contact"> <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={handleItemClick}
                /></Link>
            </Menu>
        </Segment>
    );
}

export default Navbar;
