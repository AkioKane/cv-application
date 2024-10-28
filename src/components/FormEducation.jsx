import { useState } from "react";
import { dataEducation } from "../data";
import "../styles/FormEducation.css"

function FormEducation({ setActiveButtonMenu, setActiveComponent, setEducationInfo, setNameTag}) {
  const [univerName, setUniverName] = useState("")
  const [degree, setDegree] = useState("")
  const [graduation, setGraduation] = useState("")
  const [address, setAddress] = useState("")

  const [clickedSendButton, setClickedSendButton] = useState(false)

  const handleButtonClick = (component) => {
    setActiveComponent(component)
    setActiveButtonMenu(component)
    
    if (component === "personalDetails") {
      setNameTag("Personal Details")
    } else if (component === "education") {
      setNameTag("Education")
    } else if (component === "experience") {
      setNameTag("Experience")
    }
  }

  return (
    <>
      <div className="head">
        <h1>Degree 1</h1>
        <button 
          id="add-degree"
          onClick={(e) => {
            return;
          }}
        >+</button>
      </div>
      <div className="form-education personal-info">
        <label>University Name
          <input 
            type="text"
            placeholder={dataEducation.name}
            value={univerName}
            onChange={e => 
              setUniverName(e.target.value)
            }
          />
        </label>
        <label>Degree
          <input 
            type="text"
            placeholder={dataEducation.degree}
            value={degree}
            onChange={e => 
              setUniverName(e.target.value)
            }
          />
        </label>
        <label>Graduation
          <input 
            type="text"
            placeholder={dataEducation.graduation}
            value={graduation}
            onChange={e => 
              setUniverName(e.target.value)
            }
          />
        </label>
        <label>Address
          <input 
            type="text"
            placeholder={dataEducation.address}
            value={address}
            onChange={e => 
              setUniverName(e.target.value)
            }
          />
        </label>
        
      </div>
      <div className="points"></div>
      <div className="sumbit-container">
        <button 
          className={`send-button ${clickedSendButton ? "clicked" : ""}`}
          onClick={e => {
            setClickedSendButton(true)
            setTimeout(() => {
              handleButtonClick("experience");
              // saveForm();
            }, 2000)
          }}
        >Next &#10132;</button>
      </div>
    </>
  );
}

export default FormEducation