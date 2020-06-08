import React, { useState, useEffect } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/about") return setActiveItem("about");
    if (location === "/") return setActiveItem("home");
    if (location === "/contact") return setActiveItem("contact");
    if (location === "/portfolio") return setActiveItem("portfolio");
  }, [location]);

  return (
    <Segment inverted className="navbar">
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />

        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/portfolio"
          name="portfolio"
          active={activeItem === "portfolio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/contact"
          name="contact"
          active={activeItem === "contact"}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
};

export default Navbar;
