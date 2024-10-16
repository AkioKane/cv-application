import { useState } from "react";
import { data } from "../data";

function Form() {
  const [fullName, setFullName] = useState(data.fullName)
  const [address, setAddress] = useState(data.address)

  return (
    <form>
      <label>Full Name:
        <input 
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={e => 
            setFullName(e.target.value)
          }
        />
      </label>

      <label>Address:
        <input 
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => 
            setAddress(e.target.value)
          }
        />
      </label>

    </form>
  )
}

export default Form