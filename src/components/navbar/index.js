import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "@image/Mlogo.svg";

import "./style.scss";

const NavBar = (props) => {
  const {
    homeRef,
    resumeRef,
    workRef,
    contactRef,
    projectsRef
  } = props;
  const [active, setActive] = useState("Home");
  const redirectTo = (ele) => {
    setActive(ele.textContent)
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <div className="navbar__menu-list">
        <button
          onClick={() => redirectTo(homeRef.current)}
          className={`navbar__list navbar__list${active==="Home" ? "--active" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => redirectTo(resumeRef.current)}
          className={`navbar__list navbar__list${active==="Resume" ? "--active" : ""}`}
        >
          Resume
        </button>
        <button
          onClick={() => redirectTo(workRef.current)}
          className={`navbar__list navbar__list${active==="Work Expertise" ? "--active" : ""}`}
        >
          Work Expertise
        </button>
        <button
          onClick={() => redirectTo(projectsRef.current)}
          className={`navbar__list navbar__list${active==="Projects" ? "--active" : ""}`}
        >
          Projects
        </button>
        <button
          onClick={() => redirectTo(contactRef.current)}
          className={`navbar__list navbar__list${active==="Contact" ? "--active" : ""}`}
        >
          Contact
        </button>
        <button
          className="navbar__list navbar__list--link"
          onClick={(event) =>
            (window.location.href =
              "https://www.linkedin.com/in/meghakarkihalli/")
          }
        >
          <i className="fa fa-linkedin" />
        </button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default NavBar;
