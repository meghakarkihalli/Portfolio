import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "@image/Mlogo.svg";
import { connect } from 'react-redux'
import SettingDrawer from '@local/setting-drawer'

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
  const [scroll, setScroll] = useState(false);
  const [drawer, setDrawer] = useState(false)
  const redirectTo = (ele) => {
    setActive(ele.textContent)
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  const handleScroll = () => {
    if(window.scrollY !== 0) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  }
  const toggleDrawer = () => {
    setDrawer(!drawer)
  }
  return (
    <div className={`outer ${scroll ? 'outer__scroll' : '' }`}>
    <div className={`navbar navbar--${props.color} `}>
      <div className={`navbar__logo navbar__logo--${props.color}`}>
        <Logo />
      </div>
      <div className="navbar__menu-list">
        <button
          onClick={() => redirectTo(homeRef.current)}
          className={`navbar__list navbar__list${active==="Home" ? `--active navbar__list--${props.color}` : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => redirectTo(resumeRef.current)}
          className={`navbar__list navbar__list${active==="Resume" ? `--active navbar__list--${props.color}` : ""}`}
        >
          Resume
        </button>
        <button
          onClick={() => redirectTo(workRef.current)}
          className={`navbar__list navbar__list${active==="Work Expertise" ? `--active navbar__list--${props.color}` : ""}`}
        >
          Work Expertise
        </button>
        <button
          onClick={() => redirectTo(projectsRef.current)}
          className={`navbar__list navbar__list${active==="Projects" ? `--active navbar__list--${props.color}` : ""}`}
        >
          Projects
        </button>
        <button
          onClick={() => redirectTo(contactRef.current)}
          className={`navbar__list navbar__list${active==="Contact" ? `--active navbar__list--${props.color}` : ""}`}
        >
          Contact
        </button>
        <button
          className={`navbar__list navbar__list--link navbar__list--${props.color}`}
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/meghakarkihalli/")
          }
        >
          <i className="fa fa-linkedin" />
        </button>
        <button
          className={`navbar__slider navbar__slider--${props.color}`}
          onClick={() => toggleDrawer}
        >
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </div>
    <SettingDrawer color={props.color}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { color: state.changeColor.color }
}

export default connect(mapStateToProps)(NavBar);
