import { useState } from "react";


const App = () => {

 
  return (
    <div className="container"> 
      <form action="">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <select>
          <option value="">Chose City</option>
          <option value="Rajuary">Rajuary</option>
          <option value="Dacka">Dacka</option>
        </select>

        <input type="radio"  name="gender"/>Male
        <input type="radio"  name="gender"/>Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;