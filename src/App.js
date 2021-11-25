import './App.css';
import FlipFlopButton from './components/FlipFlopButton'
import React, {useState} from 'react'

function App() {
  const [buttonVisibility, setButtonVisibility] = useState(true)
  
  return (
    <div className='flex flex-col justify-center'>
      {/* Header */}
      <div className='flex flex-col text-center'>
        <h1 className="mt-4 mb-1 font-rubik-mono text-4xl sm:text-6xl md:text-7xl text-spanish-yellow tracking-tighter">GET PUBG FIT</h1>
        <h2 className="mt-1 mb-4 font-rubik-mono text-sm sm:text-lg md:text-xl text-spanish-yellow">gotta work off that chicken dinner</h2>
      </div>
      {/* Action Container */}
      <div className='flex flex-col justify-center border-black border-2'>
        {/* Chicken Dinner */}
        <div className='flex flex-row justify-center'>
          <FlipFlopButton 
            buttonName='CHICKEN DINNER'
          />
        </div>
        {/* Game Events */}
        {/* Death Row 1 */}
        {/* Death Row 2 */}
        {/* Standard Death */}
      </div>
      {/* Footer */}
      <div className='flex justify-center text-center absolute inset-x-0 bottom-0 text-xs my-2 mx-2 text-spanish-yellow'>
        <p>You should always consult your physician or other healthcare provider before starting an exercise program. By using this website, you understand that there is a risk of injury associated with using GET PUBG FIT.</p>
      </div>
    </div>
  );
}

export default App;
