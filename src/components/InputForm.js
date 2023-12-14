import React, { memo } from "react";

const InputForm = ({ label }) => {
  return (
    <div>
      <label htmlFor="email" className="text-xs">
        {label}
      </label>
      <input
        className="bg-[#e8f0fe] outline-none p-2 w-full rounded-md mb-2"
        id="email"
        type="text"
      ></input>
    </div>
  );
};

export default memo(InputForm);
