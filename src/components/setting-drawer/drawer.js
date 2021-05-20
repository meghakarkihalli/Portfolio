import './style.scss'

const Drawer = (props) => {
  const colorList = ['light-blue', 'dark-blue', 'yellow', 'red', 'light-green', 'dark-green']
  return (
    <div className={`drawer ${props.clicked ? 'drawer__clicked' : ''}`}>
      <p className={`drawer__header ${props.clicked ? 'drawer__header--clicked' : ''}`}>Select your color</p>
      <div className={`drawer__palate`}>
        {colorList.map(color => <button className={`drawer__color drawer__color--${color}`}/>)}
      </div>
    </div>
  )
}

export default Drawer