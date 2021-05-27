import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "@image/Mlogo.svg";
import { connect } from 'react-redux'
import SettingDrawer from '@local/setting-drawer'
import Menu from './menu'

import "./style.scss";

const NavBar = (props) => {
  const {
    homeRef,
    resumeRef,
    workRef,
    contactRef,
    projectsRef,
    color
  } = props;
  const [active, setActive] = useState("Home");
  const [scroll, setScroll] = useState(false);
  const [drawer, setDrawer] = useState(false)
  const redirectTo = (ele) => {
    if(drawer) {
      setDrawer(false)
    }
    setActive(ele.id)
    if(ele.id === 'home') {
      document.body.scrollIntoView({
        behavior: "smooth"
      })
    }
    else {
      ele.scrollIntoView({
        behavior: "smooth",
      });
    }
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
    console.log(!drawer)
    setDrawer(!drawer)
  }
  return (
    <div className={`outer ${scroll ? 'outer__scroll' : '' }`}>
      <div className={`navbar navbar--${color} `}>
        <div className={`navbar__logo navbar__logo--${color}`}>
          <Logo />
        </div>
        <button
          className={`navbar__slider navbar__slider--${color}`}
          onClick={() => toggleDrawer()}
        >
          <i class="fa fa-bars"></i>
        </button>
        <Menu
          redirectTo={redirectTo}
          drawer={drawer}
          active={active}
          homeRef={homeRef}
          resumeRef={resumeRef}
          workRef={workRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          color={color}
          asSlider
        />
      </div>
      <Menu
        redirectTo={redirectTo}
        drawer={drawer}
        active={active}
        homeRef={homeRef}
        resumeRef={resumeRef}
        workRef={workRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
        color={color}
      />
      <SettingDrawer color={color}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { color: state.changeColor.color }
}

export default connect(mapStateToProps)(NavBar);
