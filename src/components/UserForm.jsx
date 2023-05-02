import React, { useState } from "react";

const UserForm = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstname, lastname, email, password, confirmPassword};
    console.log("Welcome", newUser);
  };

  const handleFirstName = e => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required")
    } else if(e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters")
    } else {
      setFirstNameError('');
    }
  }

  const handleLastName = e => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required")
    } else if(e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters")
    } else {
      setLastNameError('');
    }
  }

  const handleEmail = e => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required")
    } else if(e.target.value.length < 2) {
      setEmailError("Email must be at least 2 characters")
    } else {
      setEmailError('');
    }
  }

  const handlePassword = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password and Confrim Password are required")
    } else if(e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters")
    } else {
      setPasswordError('');
    }
  }

  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  }


  return (
    <>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={ handleFirstName } />
          {
            firstNameError ?
            <p style={{color:'red'}}>{ firstNameError }</p> : ''
          }
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={ handleLastName } />
          {
            lastNameError ?
            <p style={{color:'red'}}>{ lastNameError }</p> : ''
          }
        </div>
        <div>
          <label>Email Address: </label>
          <input type="text" onChange={ handleEmail } />
          {
            emailError ?
            <p style={{color:'red'}}>{ emailError }</p> : ''
          }
        </div>
        <div>
          <label>Password: </label>
          <input type="password" id="password" onChange={ handlePassword } />
          {
            passwordError ?
            <p style={{color:'red'}}>{ passwordError }</p> : ''
          }
          {
            confirmPassword !== password ?
            <p style={{color:'red'}}>Passwords do not match</p> :
            ''
          }
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" id="confirm-password" onChange={ handleConfirmPassword } />
        </div>
        <input type="submit" value="Create User" />
      </form>
    </>
  );
};

export default UserForm;
