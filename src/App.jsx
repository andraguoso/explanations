import { useState } from 'react'
import ShowTechnique, { techniques } from "./components/Technique"
import NavBar from "./components/Navigate"

pages = [];

function goPage() {

}

function App() {
  const [currentT, setCurrentT] = useState(null);

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

      <span
        className="technique-span"
        onClick={() => setCurrentT(technique)}
      >
        {technique.name}
      </span>

      <ShowTechnique technique={currentT} />

      <NavBar />
    </>
  )
}

export default App
