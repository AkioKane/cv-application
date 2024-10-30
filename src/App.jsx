import ButtonsMenuSelector from './components/ButtonsMenuSelector'
import Sidebar from './components/Sidebar'
import NameTag from './components/NameTag'
import LivePreview from "./components/LivePreview"
import { useState } from "react"
import "./App.css"

function App() {
  const [activeComponent, setActiveComponent] = useState(null)
  const [activeButtonMenu, setActiveButtonMenu] = useState("personalDetails")
  const [nameTag, setNameTag] = useState("Personal Details")
  const [livePreviewVisible, setLivePreviewVisible] = useState(false)

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
              setLivePreviewVisible={setLivePreviewVisible}
              livePreviewVisible={livePreviewVisible}
            />
          </div>
        </nav>

        <hr />
        
        <div className="app-sidebar">
          <div 
            className="content"
            style={{
              width: livePreviewVisible ? "50%" : "100%"
            }}
          >
            <NameTag 
              nameTagValue={nameTag}
            />
            <Sidebar 
              activeComponent={activeComponent} 
              setActiveComponent={setActiveComponent} 
              setActiveButtonMenu={setActiveButtonMenu}
              setNameTag={setNameTag}
              livePreviewVisible={livePreviewVisible}
            />
          </div>
          <LivePreview 
            livePreviewVisible={livePreviewVisible}
            setLivePreviewVisible={setLivePreviewVisible}
          />
        </div>
      </div>
    </>
  )
}

export default App