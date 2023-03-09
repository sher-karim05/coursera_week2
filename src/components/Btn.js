import React from "react";

const clickHandler = () => {
   console.log('Btn Clicked')
}
function Btn() {
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    <button onClick={function(){console.log('first example')}}>
        An inline ES5 function event handler
    </button>
    </div>

  );
}


export default Btn;
