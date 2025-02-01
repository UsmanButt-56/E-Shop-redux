import React from "react";

function Input({ name, type, placeholder, onChange ,title}) {
  return (
    <div>
      <div>
        <h5>{title}</h5>
      </div>
      <div className="h-10">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border w-full px-2 rounded-xs h-full"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;