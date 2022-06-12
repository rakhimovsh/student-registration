import React from "react";
import "./CreateStudent.css";
import CreateItem from "../CreateItem/CreateItem";

const CreateStudent = () => {
  let [students, setStudents] = React.useState(null);
  async function getStudents() {
    let res = await fetch(
      "https://online-excel-heroku.herokuapp.com/student/list",
      {
        method: "POST",
      }
    );
    let data = await res.json();

    setStudents(data.data.data);
    return data;
  }
  React.useEffect(() => {
    getStudents();
  }, [students]);

  return (
    <section className="container">
      <ul className="students__list">
        {students &&
          students.map((student) => {
            return (
              <CreateItem
                key={student.id}
                studentId={student.id}
                fullName={student.fullName}
                universityName={student.universityName}
                entranceYear={student.entranceYear}
                graduationYear={student.graduationYear}
                allStudents={students}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default CreateStudent;
