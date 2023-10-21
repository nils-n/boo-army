import React from 'react'

const Controls = () => {
  
  return (
    <>
    {/* // <!--GAME CONTROLS--> */}
        <div className="close closingbtn">
            <i className="fa fa-times cross" aria-hidden="true"></i>
            <i className="fa fa-bars menu" aria-hidden="true"></i>
        </div>

        <div className="sound-control">
            <i className="fa-solid fa-volume-high" id="sound-on"></i>
            <i className="fa-sharp fa-solid fa-volume-xmark hide" id="sound-off"></i>
        </div>
    </>
  )
}

export default Controls