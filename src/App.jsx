import { useState } from "react";


const App = () => {

  const [ list,setList ] = useState([]);
  const [ item,setItem ] = useState('');





  const AddToList = () => {
    list.push(item);
    setList([...list]);
  }
  
  return (
    <div> 
      <table>
        <tbody>
          {
            list.length!==0?(
              list.map((element,index)=>{
                return(
                  <tr>
                    <td>{element}</td>
                    <td><button>Remove</button></td>
                  </tr>
                )
              })
            ):(<tr></tr>)
          }
        </tbody>
      </table>

      <p>{list.length}</p>
      <input type="text" onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
      <button onClick={AddToList}>Click</button>
    </div>
  );
};

export default App;