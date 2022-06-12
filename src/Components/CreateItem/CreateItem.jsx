import React from "react";
import "./CreateItem.css";
import { Button } from "@mui/material";
import { Context as ModalContext } from "../../Context/Modal";

const CreateItem = ({
  studentId,
  fullName,
  universityName,
  entranceYear,
  graduationYear,
  allStudents,
}) => {
  let { setOpenModal, setChangeStudent } = React.useContext(ModalContext);
  async function handleClick(evt) {
    if (evt.target.classList.contains("delete")) {
      let deleteItemId = evt.target.dataset.deleteid;
      let res = await fetch(
        "https://online-excel-heroku.herokuapp.com/student/delete/" +
          deleteItemId,
        {
          method: "DELETE",
        }
      );
      let data = await res.json();
      if (data.data.data) {
        alert("user deleted successfully");
      }
    } else if (evt.target.classList.contains("change")) {
      let changeStudentId = +evt.target.dataset.changeid;
      let findStudent = allStudents.find(
        (student) => student.id == changeStudentId
      );
      setOpenModal(true);
      setChangeStudent(findStudent);
    }
  }

  return (
    <li onClick={handleClick} className="student__item">
      <h2>{fullName}</h2>
      <h3>{universityName}</h3>
      <h3>
        {entranceYear}-{graduationYear}
      </h3>
      <div>
        <Button className="change" data-changeid={studentId} variant="outlined">
          Change
        </Button>
        <Button
          className="delete"
          data-deleteid={studentId}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default CreateItem;
