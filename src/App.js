import './App.css';
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

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
        <label htmlFor='first'>muneeb First name</label>
        <input type="text" id ="first" placeholder='first name' onChange={(e)=> setFirst(e.target.value)}></input>
        <label htmlFor='last'>muneeb Last name</label>
        <input type="text" id ="last" placeholder='last name' onChange={(e)=> setlast(e.target.value)}></input>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
