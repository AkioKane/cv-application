import { useState } from "react";
import { dataEducation } from "../data";
import "../styles/FormEducation.css"

const localStorage = []

function FormEducation({ setActiveButtonMenu, setActiveComponent, setEducationInfo, setNameTag}) {

  const [univerName, setUniverName] = useState("")
  const [degree, setDegree] = useState("")
  const [graduation, setGraduation] = useState("")
  const [address, setAddress] = useState("")

  const [intDegree, setIntDegree] = useState(1)
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

  const clearForm = () => {
    setUniverName("")
    setDegree("")
    setGraduation("")
    setAddress("")
  }

  const saveForm = () => {
    clearForm()
    const dataEducationInfo = {
      univerName: univerName,
      degree: degree,
      graduation: graduation,
      address: address
    }

    return localStorage.push(dataEducationInfo);
  }

  return (
    <>
      <div className="head">
        <h1>Degree {intDegree}</h1>
        <button 
          id="add-degree"
          onClick={(e) => {
            saveForm()
            setIntDegree(intDegree+1)
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
              setDegree(e.target.value)
            }
          />
        </label>
        <label>Graduation
          <input 
            type="text"
            placeholder={dataEducation.graduation}
            value={graduation}
            onChange={e => 
              setGraduation(e.target.value)
            }
          />
        </label>
        <label>Address
          <input 
            type="text"
            placeholder={dataEducation.address}
            value={address}
            onChange={e => 
              setAddress(e.target.value)
            }
          />
        </label>
        
      </div>

      <div className="sumbit-container">
        <button 
          className={`send-button ${clickedSendButton ? "clicked" : ""}`}
          onClick={e => {
            saveForm();
            setEducationInfo(localStorage);
            setClickedSendButton(true);
            setTimeout(() => {
              handleButtonClick("experience");
            }, 2000)
          }}
        >Next &#10132;</button>
      </div>
    </>
  );
}

export default FormEducation