import React from "react";
import "./App.css";
import Authonticated from "./Authonticated";
import Unauthonticated from "./Unauthonticated";
import { Context } from "./Context/Login";

function App() {
  const { token } = React.useContext(Context);
  if (token) {
    return <Authonticated />;
  } else return <Unauthonticated />;
}

export default App;
