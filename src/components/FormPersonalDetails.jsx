import { useState } from "react";
import { dataPerson, data } from "../data";
import "../styles/FormPersonalDetails.css"

function FormPersonalDetails({ setActiveButtonMenu, setActiveComponent, setPersonInfo, setNameTag}) {
  const [fullName, setFullName] = useState(dataPerson.fullName)
  const [address, setAddress] = useState(dataPerson.address)
  const [job, setJob] = useState(dataPerson.job)
  const [mail, setMail] = useState(dataPerson.email)
  const [phone, setPhone] = useState(dataPerson.phoneNumber)
  const [summary, setSumamry] = useState(dataPerson.summary)

  const handleButtonClick = (component) => {
    setActiveComponent(component)
    setActiveButtonMenu(component)
    
    if (component === "personalDetails") {
      setNameTag("Personal Details")
    } else if (component === "education") {
      setNameTag("Education")
    }
  }

  const saveForm = () => {
    const dataPersonInfo = {
      fullName: fullName,
      address: address,
      job: job,
      mail: mail,
      phone: phone,
      summary: summary
    }
    
    return setPersonInfo(dataPersonInfo);
  }

  return (
    <>
      <form>
        <div className="personal-info">
          <label>Full Name:
            <input 
              type="text"
              placeholder={data.fullName}
              value={fullName}
              onChange={e => 
                setFullName(e.target.value)
              }
            />
          </label>

          <label>Job:
            <input 
              type="text"
              placeholder={data.job}
              value={job}
              onChange={e => 
                setJob(e.target.value)
              }
            />
          </label>

          <label>Phone:
            <input 
              type="text"
              placeholder={data.phoneNumber}
              value={phone}
              onChange={e => 
                setPhone(e.target.value)
              }
            />
          </label>

          <label>Email: 
            <input 
              type="text"
              placeholder={data.email}
              value={mail}
              onChange={e => 
                setMail(e.target.value)
              }
            />
          </label>
        </div>

        <label className="full-row">Address:
          <input 
            type="text"
            placeholder={data.address}
            value={address}
            onChange={e => 
              setAddress(e.target.value)
            }
          />
        </label>

        <label className="full-row textarea-row">Summary:
          <textarea
            placeholder={data.summary}
            value={summary}
            onChange={e =>
              setSumamry(e.target.value)
            }
          />
        </label>
        
      </form>
      <div className="sumbit-container">
        <button 
          className="send-button"
          onClick={e => {
            handleButtonClick("education");
            saveForm();
          }}
        >Next &#10132;</button>
      </div>
    </>
  )
}

export default FormPersonalDetails