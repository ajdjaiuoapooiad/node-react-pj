import { useState } from "react";


const App = () => {
  let [ formObj,setFormObj ] = useState({fName: '',lName: '',city: '',gender: ''})
 
  return (
    <div className="container"> 
      <form action="">
        <input type="text" placeholder="First Name" value={formObj.fName}/>
        <input type="text" placeholder="Last Name"  value={formObj.lName}/>
        <select>
          <option value="">Chose City</option>
          <option value="Rajuary">Rajuary</option>
          <option value="Dacka">Dacka</option>
        </select>

        <input checked={formObj.gender === 'Male'} type="radio"  name="gender"/>Male
        <input checked={formObj.gender === 'Female'} type="radio"  name="gender"/>Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;