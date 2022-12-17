import React,{useState} from 'react'
 
import Newuser from "./component/Newuser";
import UserDetails from './component/Userdetails'

const DUMMY = [
  { id:"e1",
    username: "suman@123",
    age: "21",
  },
  { id:"e2", username: "kusum@766", age: "20" },
];


function App() {
  const [details,setdetails]= useState(DUMMY)
  const addinputhandler =(detail)=>{
    setdetails((prevdetails)=>{
      return [detail,...prevdetails]
    })
    console.log(detail)
  }
  return (
    <div>
      
      <Newuser  onadduser={addinputhandler}></Newuser>
      {details.map((name)=>(
        <UserDetails  
        key ={name.id}
        username ={name.username}
        age={name.age}
        />
      ))

      }
         
      
    </div>
  );
}

export default App;
