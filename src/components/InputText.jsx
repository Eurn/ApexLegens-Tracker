import React, { useState } from "react";
import clsx from "clsx";
import Cross from "../assets/cross";

const InputText = ({
  type = "text",
  fullWidth = false,
  isSmall = false,
  min,
  placeHolder = "",
  isCenter = false,
  rounded = true,
  value,
  cross = false,
}) => {
  const [state, setState] = useState(value ?? "");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleClick = () => {
    setState("");
  };

  return (
    <div className="input relative">
      <input
        id="searchBar"
        onChange={handleChange}
        type={type}
        value={state}
        min={min}
        placeholder={placeHolder}
        className={clsx({
          "font-semibold text-darkGray py-2 px-4 border border-middleGray focus:outline-darkBlue": true,
          "rounded ": rounded,
          "w-full": fullWidth,
          "w-20": isSmall,
          "text-center": isCenter,
        })}
      />
      {cross && state && (
        <Cross
          onClick={handleClick}
          className="absolute bg-crossInputBg rounded-full fill-crossInputSVG"
          style={{
            top: "50%",
            right: "8px",
            transform: "translate(0px, -50%) rotate(45deg)",
            width: "20px",
            height: "20px",
          }}
        />
      )}
    </div>
  );
};

export default InputText;
