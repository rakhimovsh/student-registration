import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import AddStudent from "../../Components/AddStudent/AddStudent";
import CreateStudent from "../../Components/CreateStudent/CreateStudent";
import { Context as ModalContext } from "../../Context/Modal";

const Home = () => {
  let { setOpenModal } = React.useContext(ModalContext);

  return (
    <>
      <header className="container header">
        <Button onClick={() => setOpenModal(true)} variant="contained">
          Add student
        </Button>
      </header>
      <main>
        <CreateStudent />
      </main>
      <AddStudent />
    </>
  );
};

export default Home;
