import React from 'react'
import './UserInputInfo.scss'

export default function UserInputInfo({ submitHandler }) {
    return (
        <div className='user-input'>
          <h1 className='user-input__hero'>How rich is rich?</h1>
            <form onSubmit={submitHandler} className='user-input__form'>
            <input className='input-box' type="text" name="name" placeholder="What's your name?"/>
            <input className='input-box' type="text" name="salary" placeholder="What's your annual salary?"/>
            <button className='btn'><h2>Submit</h2></button>
            </form>
            <p>Don't worry, your information is not saved or stored</p>
        </div>
    )
}
