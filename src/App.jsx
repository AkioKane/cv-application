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

  const [personInfo, setPersonInfo] = useState(null)
  const [educationInfo, setEducationInfo] = useState(null)
  const [experienceInfo, setExperienceInfo] = useState(null)

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
              width: livePreviewVisible ? "55%" : "100%"
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
              setPersonInfo={setPersonInfo}
              setEducationInfo={setEducationInfo}
              setExperienceInfo={setExperienceInfo}
            />
          </div>
          <LivePreview 
            livePreviewVisible={livePreviewVisible}
            personInfo={personInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </>
  )
}

export default App