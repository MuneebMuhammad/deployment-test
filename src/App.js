import './App.css';
import React, { useRef, useState } from "react";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { app, db, storage } from "./firebase";

function App() {
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("")

  const handleSubmit = async()=>{
    console.log(first, last)
    await setDoc(doc(db, "users", first+last), {
      first,
      last
    })

  }

  return (
    <div>
      <form>
        <label htmlFor='first'>Youtube Finals Your First name from tests</label>
        <input type="text" id ="first" placeholder='first name' onChange={(e)=> setFirst(e.target.value)}></input>
        <label htmlFor='last'>Yourtube Finals Your last name  from tests</label>
        <input type="text" id ="last" placeholder='last name' onChange={(e)=> setlast(e.target.value)}></input>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
