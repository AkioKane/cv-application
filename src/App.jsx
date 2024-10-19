import ButtonsMenuSelector from './components/ButtonsMenuSelector'
import Sidebar from './components/Sidebar'
import { useState } from "react"
import "./styles/App.css"

function App() {
  const [activeComponent, setActiveComponent] = useState(null)

  return (
    <>
      <div className="app">
        <nav>
          <div className="menu-buttons">
            <ButtonsMenuSelector setActiveComponent={setActiveComponent} />
          </div>
        </nav>
        
        <div className="app-sidebar">
          <h1>Personal Details</h1>
          <Sidebar activeComponent={activeComponent}/>
        </div>
      </div>
    </>
  )
}

export default App