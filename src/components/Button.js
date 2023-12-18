import React, { memo } from "react";

const Button = ({ text, textColor, bgColor, Icon, onClick, fullWidth }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`outline-none rounded-md ${
        fullWidth && "w-full"
      } py-2 px-2 ${textColor} ${bgColor} hover:underline flex items-center justify-center gap-1`}
    >
      {text}
      {Icon && <Icon></Icon>}
    </button>
  );
};

export default memo(Button);
