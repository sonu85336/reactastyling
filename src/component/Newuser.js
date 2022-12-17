import Adduser from './Adduser';
import './NewExpens.css'
 const Newuser = (props)=>{
const saveuserdetailshandler=(entereduserdata)=>{
    const enterdata={
        ...entereduserdata,
        id:Math.random().toString()
    }
props.onadduser(enterdata)
}
return (
<div className='new-expense'>
 
    <Adduser onsaveuserdata={saveuserdetailshandler}></Adduser>
    
    
</div>
)

}
 export  default Newuser;