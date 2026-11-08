import { useState } from 'react'

import ShowTechnique, { bronzes } from "./components/Technique"
import { silvers } from "./components/Technique"
import { golds } from "./components/Technique"

import NavBar from "./components/Navigate"

function App() {
  const [currentT, setCurrentT] = useState(null);

  return (
    <>
      <section className="flex flex-col p-10 gap-2 justify-center items-center">
        <h1 className="rounded-lg font-bold text-8xl p-5 text-rose bg-cielo">
          explanations
        </h1>

        <p>
          problem solutions and explanations of some concepts for competitive programming c:
        </p>

        <div className="flex flex-row gap-10">
          <div className="p-3 rounded-lg bg-menta">
            <span className="font-bold">bronze topics</span>
            {bronzes.map((technique) => (
              <span
                className="flex flex-row"
                onClick={() => setCurrentT(technique)}
              >
                {technique.name}
              </span>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-menta">
            <span className="font-bold">silver topics</span>
            {silvers.map((technique) => (
              <span
                className="flex flex-row"
                onClick={() => setCurrentT(technique)}
              >
                {technique.name}
              </span>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-menta">
            <span className="font-bold">gold topics</span>
            {golds.map((technique) => (
              <span
                className="flex flex-row"
                onClick={() => setCurrentT(technique)}
              >
                {technique.name}
              </span>
            ))}
          </div>
        </div>
        <ShowTechnique technique={currentT} />

        <NavBar />
      </section>
    </>
  )
}

export default App
