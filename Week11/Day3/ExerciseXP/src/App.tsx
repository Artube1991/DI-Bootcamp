import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "../components/Greeting.tsx"
import Counter from "../components/Counter.tsx"
import UserCard from "../components/UserCard.tsx"
import Post from "../components/Posts.tsx"

const name = "Alexey";
const age = 33;

function App() {
const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Greeting myName={name}/>
      <Counter count={count} setCount={setCount}/>
      <UserCard myName={name} myAge={age}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Post count={count}/>
    </>
  )
}

export default App
