import './style.scss'

const IntroTitle = () => {
  return (
    <div className="intro-title">
      <h1 className={`intro-title__name`}>Hi, I'm Megha</h1>
      <p className={`intro-title__text`}>I design and code things beautifully. By day, I code for Walmart's website. By night, I enjoy doodling and solve jigsaw. I love what I do!</p>
      <div className={`intro-title__btns`}>
        <button className={`intro-title__hire-btn`}>Hire Me</button>
        <button className={`intro-title__resume-btn`}>Download Resume!</button>
      </div>
    </div>
  )
}

export default IntroTitle