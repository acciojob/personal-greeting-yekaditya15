import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const handelInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <label>Enter your name: </label>
      <br />
      <input type="text" value={name} onChange={handelInputChange} />
      <p>'{name}'</p>
    </div>
  );
};

export default App;
