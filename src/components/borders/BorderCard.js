import React from "react";

function BorderCard({ pos, color }) {
  return (
    <div className={"card mb-4 py-3 border-" + pos + "-" + color}>
      <div className="card-body">{".border-" + pos + "-" + color}</div>
    </div>
  );
}

export default BorderCard;
