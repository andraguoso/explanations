import { useState } from 'react'
import ShowTechnique from "./components/Technique"

pages = [];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>explanations</h1>
      <p>
        problem solutions and explanations of some concepts for competitive programming c:
      </p>
      <span>brute force</span>
      <span>binary search</span>
      <span>graph implementations</span>
      <span>depth-first search</span>
    </>
  )
}

export default App
