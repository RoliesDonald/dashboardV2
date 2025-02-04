import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-500">{category}</p>
      <p className="text-3xl font-semibold tracking-tight text-slate-700">
        {title}
      </p>
    </div>
  );
};

export default Header;
