import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import starfieldlogo from '/starfield.svg'

function App() {
  const [count, setCount] = useState(0)
  const [people,setPeople] = useState(0)
  return (
    <>
      <div>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count +1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="Starfield">
      <a href="https://bethesda.net/en/game/starfield" target="_blank">
          <img src={starfieldlogo} className="logo starfield" alt="Star logo" />
        </a>
        <h1>
        <button onClick={() => setPeople((people) => people +45)}>
        Into the Starfield 
        </button>
        </h1>
        <p>{people} people in the Starfield </p>
        <p>click on the starfiled logo to learn more</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
