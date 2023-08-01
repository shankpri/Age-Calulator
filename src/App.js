
import './App.css';
import {useState} from "react"
import Axios from "axios"

function App() {
  const [name,setname]=useState("")
  const [nage,setage]=useState(null)
  const feth =()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setage(res.data.age)
    })
  }
  return (
    <div className="App">
      <div>
      <input placeholder="your name" onChange={(event)=>{
        setname(event.target.value)
      }}/>
      </div>
      <div>
      <button className='bt' onClick={feth}>Predict age</button>
      </div>
      {<h1>your age is: {nage}</h1>}  
     
  
      
    </div>
  );
}

export default App;
