import ButtonsMenuSelector from './components/ButtonsMenuSelector'
import Sidebar from './components/Sidebar'
import { useState } from "react"
import "./styles/App.css"

function App() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [activeButtonMenu, setActiveButtonMenu] = useState("personalDetails")

  return (
    <>
      <div className="app">
        <nav>
          <div className="menu-buttons">
            <ButtonsMenuSelector 
              activeButtonMenu={activeButtonMenu}
              setActiveButtonMenu={setActiveButtonMenu}
              setActiveComponent={setActiveComponent} 
            />
          </div>
        </nav>

        <hr />
        
        <div className="app-sidebar">
          <h1>Personal Details</h1>
          <Sidebar 
            activeComponent={activeComponent} 
            setActiveComponent={setActiveComponent} 
            setActiveButtonMenu={setActiveButtonMenu}
          />
        </div>
      </div>
    </>
  )
}

export default App