import ButtonsMenuSelector from './components/ButtonsMenuSelector'
import Sidebar from './components/Sidebar'
import NameTag from './components/NameTag'
import { useState } from "react"
import "./styles/App.css"

function App() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [activeButtonMenu, setActiveButtonMenu] = useState("personalDetails")
  const [nameTag, setNameTag] = useState("Personal Details")

  return (
    <>
      <div className="app">
        <nav>
          <div className="menu-buttons">
            <ButtonsMenuSelector 
              activeButtonMenu={activeButtonMenu}
              setActiveButtonMenu={setActiveButtonMenu}
              setActiveComponent={setActiveComponent}
              setNameTag={setNameTag}
            />
          </div>
        </nav>

        <hr />
        
        <div className="app-sidebar">
          <NameTag 
            nameTagValue={nameTag}
          />
          <Sidebar 
            activeComponent={activeComponent} 
            setActiveComponent={setActiveComponent} 
            setActiveButtonMenu={setActiveButtonMenu}
            setNameTag={setNameTag}
          />
        </div>
      </div>
    </>
  )
}

export default App