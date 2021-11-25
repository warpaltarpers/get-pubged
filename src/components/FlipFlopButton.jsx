import React, { useState } from 'react'

const FlipFlopButton = (props) => {
  const [activityState, setActivityState] = useState(false)

  function handleButtonSelect() {
    setActivityState(!activityState)
  }

  return (
    <div
      className={
        activityState
          ? 'text-center font-medium text-white bg-spanish-yellow rounded border-2 border-harvest-gold border-solid hover:text-spanish-yellow hover:bg-transparent hover:border-spanish-yellow p-3 my-2 mx-2 duration-150 ease-in-out'
          : 'text-center font-medium text-spanish-yellow bg-transparent rounded border-2 border-spanish-yellow border-solid hover:text-white hover:bg-spanish-yellow hover:border-harvest-gold p-3 my-2 mx-2 duration-150 ease-in-out'
      }
      onClick={() => handleButtonSelect()}
    >
      <p>{props.buttonName}</p>
    </div >
  )
}

export default FlipFlopButton
