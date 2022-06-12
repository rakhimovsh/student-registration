import React, { useEffect } from "react";
import "./AddStudent.css";
import CreateInput from "../CreateInput/CreateInput";
import { Button } from "@mui/material";
import { Context as ModalContext } from "../../Context/Modal";

const CreatStudent = () => {
  let { openModal, setOpenModal, changeStudent, setChangeStudent } =
    React.useContext(ModalContext);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, []);
  async function handleSubmit(evt) {
    evt.preventDefault();
    let {
      fullName,
      universityName,
      entranceYear,
      graduationYear,
      faculty,
      speciality,
      studyType,
      academicType,
      diplomaSerial,
      diplomaRegistrationNumber,
      givenDate,
      academicLevel,
      appendixNumber,
      organizationId,
    } = evt.target.elements;
    let formElements = {
      fullName: fullName.value,
      universityName: universityName.value,
      entranceYear: entranceYear.value,
      graduationYear: graduationYear.value,
      faculty: faculty.value,
      speciality: speciality.value,
      studyType: studyType.value,
      academicType: academicType.value,
      diplomaSerial: diplomaSerial.value,
      diplomaRegistrationNumber: diplomaRegistrationNumber.value,
      givenDate: givenDate.value,
      academicLevel: academicLevel.value,
      appendixNumber: appendixNumber.value,
      organizationId: Number(organizationId.value),
    };

    if (!changeStudent) {
      let res = await fetch(
        "https://online-excel-heroku.herokuapp.com/student/create",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formElements),
        }
      );
      let data = await res.json();
      if (data.data.success) {
        setOpenModal(false);
        alert("Student added successfully");
        for (let element of evt.target.elements) {
          element.value = null;
        }
      } else {
        alert(data.data.error?.message);
      }
    } else {
      let { id } = changeStudent;
      formElements.id = id;
      let res = await fetch(
        "https://online-excel-heroku.herokuapp.com/student/update",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formElements),
        }
      );
      let data = await res.json();
      if (data.data.success) {
        setOpenModal(false);
        setChangeStudent(null);
        alert("Student changed successfully");
        for (let element of evt.target.elements) {
          element.value = null;
        }
      } else {
        alert(data.data.error?.message);
      }
    }
  }
  return (
    <div className={`creatStudent ${openModal ? "open" : ""}`}>
      <form className="creatStudent__form" onSubmit={handleSubmit}>
        <span
          onClick={() => {
            setOpenModal(false);
            setChangeStudent(null);
          }}
          className="close"
        >
          &times;
        </span>
        <div className="creatStudent__inputs">
          <CreateInput name="fullName" label="Full name" />
          <CreateInput name="universityName" label="University name" />
          <CreateInput name="entranceYear" label="Entrance year" />
          <CreateInput name="graduationYear" label="Graduation year" />
          <CreateInput name="faculty" label="Faculty" />
          <CreateInput name="speciality" label="Speciality" />
          <CreateInput name="studyType" label="Study type" />
          <CreateInput name="academicType" label="Academic type" />
          <CreateInput name="diplomaSerial" label="Diploma serial" />
          <CreateInput
            name="diplomaRegistrationNumber"
            label="Diploma registration number"
          />
          <CreateInput name="givenDate" label="Given date" />
          <CreateInput name="academicLevel" label="Academic level" />
          <CreateInput name="appendixNumber" label="Appendix number" />
          <CreateInput name="organizationId" label="Organization id" />
        </div>
        <Button variant="contained" type="submit">
          Add student
        </Button>
      </form>
    </div>
  );
};

export default CreatStudent;
