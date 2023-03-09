import React from "react";

const clickHandler = () => {
   console.log('Btn Clicked')
}
function Btn() {
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}


export default Btn;
