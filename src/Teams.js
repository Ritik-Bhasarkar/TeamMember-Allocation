import React from 'react'

const Teams = ({selectedTeam , handleTeamSelectionChange}) => {
  return (
    <div>
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
  );
}

export default Teams