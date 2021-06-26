import "./App.css";
import Login from "./Login/login";
import { Chat } from "./Chat";
import React, { useState } from "react";
import config from "../config.json";

function App() {
  const [name, setName] = useState("");
  if (config.signInEnabled && name === "") {
    return <Login setName={setName} />;
  } else {
    return <Chat name={name}/>;
  }
}

export default App;
