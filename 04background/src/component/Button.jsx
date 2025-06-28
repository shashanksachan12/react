import React from 'react';

function Button(props) {
  return (
    <div>
      <button
        className={`${props.buttonColor} border-[2px] border-black rounded-lg text-black px-3 py-2`}
        onClick={props.onClick}
      >
        {props.btnText}
      </button>
    </div>
  );
}

export default Button;
