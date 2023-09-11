import userMale from "./images/Male coder.png";
import userFemale from "./images/female coder.png";

const Employees = ({
  employees,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
  selectedTeam,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-7">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
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
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
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
