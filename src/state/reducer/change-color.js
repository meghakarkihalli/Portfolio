import update from 'immutability-helper'
import color from '../constant'

const initialState = {
  color: 'light-blue'
}

const changeColor = (state=initialState, action={}) => {
  const { type, value } = action

  if(type === color.CHANGE_COLOR) {
    return update(state, {
      color: value
    })
  }
  return state
}

export default changeColor