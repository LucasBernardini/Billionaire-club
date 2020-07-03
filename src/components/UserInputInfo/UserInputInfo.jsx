import React from 'react'
import './UserInputInfo.scss'

export default function UserInputInfo({ submitHandler }) {
    return (
        <div className='user-input'>
            <form onSubmit={submitHandler} className='user-input__form'>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="salary" placeholder="Annual Salary"/>
            <button>Submit</button>
            </form>
            <p>Don't worry, your information is not saved or stored</p>
        </div>
    )
}
