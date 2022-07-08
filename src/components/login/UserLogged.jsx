import React from 'react'
import "../login/LoginScreen.css";

const UserLogged = () => {
  return (
    <div className='user__loged-container'>
    <article className='user__loged'>
        <i className="fa-solid fa-user-check"></i>
        <h2>User Logger</h2>
    </article>
    </div>
  )
}

export default UserLogged