import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModel";

import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,seterror]= useState('')
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
      seterror({
       title:'Invalid input',
       message:'please enter a valid age and username'
      })
      return;
    }
    if(+enteredAge<1){
      seterror({
        title:'Invalid age',
        message:'Please enter a valid age(>0)'
      })  
      return ;
    }
     props.onAddUser(enteredUsername,enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  };
  const errorHandler=()=>{
    seterror(null)
  }

  return (
    <div>
    {error && <ErrorModal title={error.title}  message={error.message}
    onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age </label>
        <input id="age" type="number"
        value={enteredAge}
        onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form> 
    </Card></div>
  );
};
export default AddUser;
