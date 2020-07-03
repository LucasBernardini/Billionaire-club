import React from 'react'

export default function UserInputInfo({ submitHandler }) {
    return (
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="salary"placeholder="Annual Salary"/>
            <button>Submit</button>
            </form>
            <p>Don't worry, your information is not saved or stored</p>
        </div>
    )
}
