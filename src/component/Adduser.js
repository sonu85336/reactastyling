import React,{useState} from "react"
import "./Adduser.css";
import "./Button.css";
import "./ExpenseForm.css";
function Adduser(props) {
    const [inputname,setname]=useState('')
    const [inputage,setage]=useState('')
    const usernamehandler =(event)=>{
        setname(event.target.value)
      
    }
    const useragehandler=(event)=>{
        setage(event.target.value)
       
    }
    const submitHandler=(event)=>{
        event.preventDefault()
    const enterdata ={
        username:inputname,
        age:inputage
    }
     props.onsaveuserdata(enterdata)
    setname('');
    setage('');

    }
  return (
    <form  onSubmit={submitHandler}>
      <div className="new-expense__controls">
         <div className="new-expense__control">
          <label>Username</label>
          <div  className="new-expense__control">
            <input type="text" value={inputname}onChange={usernamehandler}></input> 
          </div>
        </div>
        <div className="new-expense__control">
          <label>Age(Years)</label>
          <div  className="new-expense__control">
            <input type="text" value={inputage} onChange={useragehandler}></input> 
          </div>
        </div>
         </div>
        <div  >
          <button type="submit">Add User</button>
        </div>
     
    </form>
  );
}
export default Adduser;
