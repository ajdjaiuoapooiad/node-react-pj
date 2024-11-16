import { useState } from "react";


const App = () => {
  let [ formObj,setFormObj ] = useState({fName: '',lName: '',city: '',gender: ''})

  const inputOnChange = (property,value) => {
    setFormObj(preObj => ({
      ...preObj,
      [property]:value
    }))
  }
 
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formObj);
    
  }

  return (
    <div className="container"> 
      <form action="">
        <input onChange={(e)=>{inputOnChange('fName',e.target.value)}} type="text" placeholder="First Name" value={formObj.fName}/>
        <input onChange={(e)=>{inputOnChange('lName',e.target.value)}} type="text" placeholder="Last Name"  value={formObj.lName}/>
        <select onChange={(e)=>{inputOnChange('city',e.target.value)}} value={formObj.city}>
          <option value="">Chose City</option>
          <option value="Rajuary">Rajuary</option>
          <option value="Dacka">Dacka</option>
        </select>

        <input onChange={()=>{inputOnChange('gender','Male')}} checked={formObj.gender === 'Male'} type="radio"  name="gender"/>Male
        <input onChange={()=>{inputOnChange('gender','Female')}} checked={formObj.gender === 'Female'} type="radio"  name="gender"/>Female
        <br />
        <button type="submit" onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default App;