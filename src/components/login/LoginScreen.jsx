import React, { useEffect, useState } from "react";
import UserLogged from "./UserLogged";
import Form from './Form'


const LoginScreen = () => {

  const[token, setToken] = useState('')
  const changedToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(changedToken)
  },[changedToken])

  return (
    <div className="login">
      {
        token ? <UserLogged/>
        :
        <Form/>
      }
    </div>
  );
};

export default LoginScreen;
