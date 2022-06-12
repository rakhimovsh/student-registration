import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  let [changeStudent, setChangeStudent] = React.useState(null);
  let [openModal, setOpenModal] = React.useState(false);
  return (
    <Context.Provider
      value={{ changeStudent, setChangeStudent, openModal, setOpenModal }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
