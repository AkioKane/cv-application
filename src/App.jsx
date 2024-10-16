import { useState } from 'react'
import Form from './components/Form'
import "./styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Form />
        </div>
        
        <div className="resume"></div>
      </div>
    </>
  )
}

export default App