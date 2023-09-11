import { useState } from "react";
import userMale from "./images/Male coder.png";
import userFemale from "./images/female coder.png";

const Employees = () => {
  const [selectedTeam, setTeam] = useState("TeamB");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
    console.log(event.target.value);
  }

  function handleEmployeeCardClick(e) {
    const tranformedEmployees = employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(tranformedEmployees);
  }

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-7">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
            onClick={handleEmployeeCardClick}
          >
            <option value="TeamA">Development</option>
            <option value="TeamB">Social Media</option>
            <option value="TeamC">Mangement</option>
            <option value="TeamD">Hiring</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-7">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className={(employee.teamName===selectedTeam?'card m-2 standout':'card m-2')}
                style={{ cursor: "pointer" }}
              >
                {employee.gender === "male" ? (
                  <img src={userMale} className="card-img-top" alt="" />
                ) : (
                  <img src={userFemale} className="card-img-top" alt="" />
                )}

                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    Designation: {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
