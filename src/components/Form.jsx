import { useState } from "react";
import { data } from "../data";
import "../styles/Form.css"

function Form() {
  const [fullName, setFullName] = useState(data.fullName)
  const [address, setAddress] = useState(data.address)
  const [job, setJob] = useState(data.job)
  const [mail, setMail] = useState(data.email)
  const [phone, setPhone] = useState(data.phoneNumber)
  const [summary, setSumamry] = useState(data.summary)

  return (
    <form>
      <label>Full Name:
        <input 
          type="text"
          placeholder={data.fullName}
          onChange={e => 
            setFullName(e.target.value)
          }
        />
      </label>

      <label>Job:
        <input 
          type="text"
          placeholder={data.job}
          onChange={e => 
            setJob(e.target.value)
          }
        />
      </label>

      <label>Phone:
        <input 
          type="text"
          placeholder={data.phoneNumber}
          onChange={e => 
            setPhone(e.target.value)
          }
        />
      </label>

      <label>Email: 
        <input 
          type="text"
          placeholder={data.email}
          onChange={e => 
            setMail(e.target.value)
          }
        />
      </label>

      <label className="full-row">Address:
        <input 
          type="text"
          placeholder={data.address}
          onChange={e => 
            setAddress(e.target.value)
          }
        />
      </label>

      <label className="full-row textarea-row">Summary:
        <textarea
          placeholder={data.summary}
          onChange={e =>
            setSumamry(e.target.value)
          }
        />
      </label>

    </form>
  )
}

export default Form