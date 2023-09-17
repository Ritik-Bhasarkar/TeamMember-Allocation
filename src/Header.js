import React from "react";

const Header = ({ selectedTeam, teamMembers }) => {
  return (
    <header className="container">
      <div className="row justify-content-center t-3 mb-4">
        <div className="col-7">
          <h1 className="">Team Member Allocation </h1>
          <h3>
            {selectedTeam} has {teamMembers}
            {teamMembers === 1 ? "member" : "members"}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
