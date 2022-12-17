import "./NewExpens.css";
import './ExpenseForm.css'
function UserDetails(props) {
  const username =props.username;
  const age = props.age;
  return (
    <div className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__controls ">
       <h2>{ username}</h2> 
        <div className="new-expense__controls " ><h2>{ age}</h2></div>
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
