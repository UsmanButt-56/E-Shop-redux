import React from "react";

function Input({ name, type, placeholder }) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
      </div>
      <div className="h-10">
        <input
          type={type}
          placeholder={placeholder}
          className="border w-full px-2 rounded-xs h-full"
        />
      </div>
    </div>
  );
}

export default Input;