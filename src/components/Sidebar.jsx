import { useState } from "react"
import FormPersonalDetails from "./FormPersonalDetails"
import FormEducation from "./FormEducation"

function Sidebar({ activeComponent, setActiveComponent, setActiveButtonMenu, setNameTag }) {
  const [personInfo, setPersonInfo] = useState(null)
  const [educationInfo, setEducationInfo] = useState(null)

  const renderComponent = () => {
    switch (activeComponent) {
      case 'personalDetails':
        return (<FormPersonalDetails 
          setActiveComponent={setActiveComponent}
          setActiveButtonMenu={setActiveButtonMenu} 
          setPersonInfo={setPersonInfo}
          setNameTag={setNameTag}
        />)
      
      case "education":
        return <FormEducation 
          setActiveComponent={setActiveComponent} 
          setActiveButtonMenu={setActiveButtonMenu} 
          setEducationInfo={setEducationInfo}
          setNameTag={setNameTag}
        />
      
      case "experience":
        return;
      
      default:
        return (<FormPersonalDetails 
          setActiveComponent={setActiveComponent} 
          setActiveButtonMenu={setActiveButtonMenu} 
          setPersonInfo={setPersonInfo}
          setNameTag={setNameTag}
        />)
    }
  }

  return (
    <>
      <div className="sidebar">
        {renderComponent()}
      </div>
    </>
  )
}

export default Sidebar