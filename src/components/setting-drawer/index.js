import React, { Component } from 'react'
import Drawer from './drawer'
import './style.scss'

class SettingDrawer extends Component {
  state = {
    showDrawer: false
  }
  toggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer})
  }
  render() {
    const {showDrawer} = this.state
    return (
      <>
        <Drawer clicked={showDrawer}/>
        <button className={`settings settings__${showDrawer && 'showDrawer'}`} onClick={this.toggleDrawer}>
          <i className={`fa fa-cog settings__gear settings__gear--${this.props.color}`}></i>
        </button>
      </>
    )
  }
}

export default SettingDrawer