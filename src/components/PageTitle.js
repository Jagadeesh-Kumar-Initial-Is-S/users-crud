import React from "react";

function PageTitle({ title, children }) {
  return (
    <div className="text-left">
      <h1 className="h3 mb-0 text-gray-800 mb-3">{title}</h1>
      <p className="mb-4">
        <p className="mb-4">{children}</p>
      </p>
    </div>
  );
}

export default PageTitle;
