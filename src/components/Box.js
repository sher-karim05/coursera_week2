import React from 'react'

const mouseHoverHandler = () => {
console.log('Mouse over event fired.')
}

function Box() {
  return (
    <div className='box'>
        <p onMouseOver={mouseHoverHandler}>Over mouse over the Box</p>
    </div>
  )
}

export default Box
