import { useState } from "react";
import { dataExperience } from "../data";
import "../styles/FormExperience.css"

const localStorage = []

function FormExperience({ setActiveButtonMenu, setActiveComponent, setExperienceInfo, setNameTag}) {
  const [companyName, setCompanyName] = useState("")
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")
  const [address, setAddress] = useState("")

  const [intJob, setIntJob] = useState(1)
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
    setCompanyName("")
    setTitle("")
    setDuration("")
    setAddress("")
  }

  const saveForm = () => {
    clearForm()
    const dataExperienceInfo = {
      companyName: companyName,
      title: title,
      duration: duration,
      address: address
    }

    return localStorage.push(dataExperienceInfo);
  }

  return (
    <>
      <div className="head">
        <h1>Job {intJob}</h1>
        <button 
          id="add-job"
          onClick={(e) => {
            saveForm()
            setIntJob(intJob+1)
          }}
        >+</button>
      </div>

      <div className="form-experience personal-info">
        <label>Company Name
          <input 
            type="text"
            placeholder={dataExperience.name}
            value={companyName}
            onChange={e => 
              setCompanyName(e.target.value)
            }
          />
        </label>
        <label>Job Title
          <input 
            type="text"
            placeholder={dataExperience.title}
            value={title}
            onChange={e => 
              setTitle(e.target.value)
            }
          />
        </label>
        <label>Duration
          <input 
            type="text"
            placeholder={dataExperience.duration}
            value={duration}
            onChange={e => 
              setDuration(e.target.value)
            }
          />
        </label>
        <label>Address
          <input 
            type="text"
            placeholder={dataExperience.address}
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
            setExperienceInfo(localStorage);
            setClickedSendButton(true);
            setTimeout(() => {
              setClickedSendButton(false);
            }, 2200)
          }}
        >Sumbit</button>
      </div>
    </>
  );
}

export default FormExperience