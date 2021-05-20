import color from '../constant'

const changeColor = (value) => ({
  type: color.CHANGE_COLOR,
  value
})

export default changeColor