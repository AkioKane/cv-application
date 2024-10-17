import { useState } from 'react'
import Form from './components/Form'
import "./styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <div className="app-sidebar">
          <h1>Personal Details</h1>
          <div className="sidebar">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default App