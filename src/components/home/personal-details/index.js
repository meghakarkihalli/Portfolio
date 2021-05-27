import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './style.scss'

const PersonalDetails = (props) => {
  const [typeText, setText] =  useState('Web Developer');
  const { color } = props
  const typeEffect = () => {
    let str = ''
    const text = ['Web Designer', 'UI Developer']
    text.map((word) => {
      word.split('').map((i) => {
        str = str + i
        console.log(str)
        setText(str)
      })
      str = ''
    })
  }
  useEffect(() => {
    setInterval(typeEffect, 100)
  });
  return (
    <div className='personal-details'>
      <div className={`personal-details__details personal-details__details--${color} `}>
        <p className={`personal-details__details--header`}>Personal Details</p>
        <p>email: meghakm512@gmail.com</p>
        <p>Nationality: Indian</p>
      </div>
      <div className='personal-details__objective'>
        <h1>{`I am Web ${typeText}`}</h1>
        <p>Enthusiastic Front-end Developer with 5 years
          experience including around 2 years with a major
          eCommerce business across the world. Seeking to
          boost and leverage my knowledge in the Web Development world.
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { color: state.changeColor.color }
}

export default connect(mapStateToProps)(PersonalDetails)
