import React,{useState} from "react";
import AddUser from "./component/user/AddUser";
import UserList from "./component/user/UserList";
function App() {
  const [userList,setUserList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return <div>
    <AddUser onAddUser={addUserHandler}></AddUser>
    <UserList users={userList}></UserList>
     </div>;
}

export default App;
