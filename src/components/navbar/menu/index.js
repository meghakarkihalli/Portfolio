import './style.scss'

const Menu = (props) => {
  const {
    homeRef,
    resumeRef,
    workRef,
    contactRef,
    projectsRef,
    redirectTo,
    drawer,
    active,
    color,
    asSlider
  } = props;
  return (
    <div className={`nav-menu${drawer ? ' nav-menu--drawer' : '' }${asSlider ? ' nav-menu--hide' : ''}`}>
      <button
        onClick={() => redirectTo(homeRef.current)}
        className={`nav-menu__list nav-menu__list${active==="Home" ? `--active nav-menu__list--${color}` : ""}`}
      >
        Home
      </button>
      <button
        onClick={() => redirectTo(resumeRef.current)}
        className={`nav-menu__list nav-menu__list${active==="Resume" ? `--active nav-menu__list--${color}` : ""}`}
      >
        Resume
      </button>
      <button
        onClick={() => redirectTo(workRef.current)}
        className={`nav-menu__list nav-menu__list${active==="Work Expertise" ? `--active nav-menu__list--${color}` : ""}`}
      >
        Work Expertise
      </button>
      <button
        onClick={() => redirectTo(projectsRef.current)}
        className={`nav-menu__list nav-menu__list${active==="Projects" ? `--active nav-menu__list--${color}` : ""}`}
      >
        Projects
      </button>
      <button
        onClick={() => redirectTo(contactRef.current)}
        className={`nav-menu__list nav-menu__list${active==="Contact" ? `--active nav-menu__list--${color}` : ""}`}
      >
        Contact
      </button>
      <button
        className={`nav-menu__list nav-menu__list--link nav-menu__list--${props.color}`}
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/meghakarkihalli/")
        }
      >
        <i className="fa fa-linkedin" />
      </button>
    </div>
  )
}

export default Menu