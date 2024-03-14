import userMale from "./images/Male coder.png";
import userFemale from "./images/female coder.png";
import Teams from "./Teams";

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
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className=" card-employees col-4">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
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
