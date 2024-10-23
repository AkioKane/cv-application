import { useState } from "react"
import FormPersonalDetails from "./FormPersonalDetails"

function Sidebar({ activeComponent, setActiveComponent, setActiveButtonMenu }) {
  const [personInfo, setPersonInfo] = useState(null)
  
  const renderComponent = () => {
    switch (activeComponent) {
      case 'personalDetails':
        return (<FormPersonalDetails 
          setActiveComponent={setActiveComponent}
          setActiveButtonMenu={setActiveButtonMenu} 
          setPersonInfo={setPersonInfo}
        />)
      case "education":
        return <h1>Hello world</h1>
      default:
        return (<FormPersonalDetails 
          setActiveComponent={setActiveComponent} 
          setActiveButtonMenu={setActiveButtonMenu} 
          setPersonInfo={setPersonInfo}
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