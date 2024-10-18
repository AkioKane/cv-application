import { useState } from 'react'
import FormPersonalDetails from './components/FormPersonalDetails'
import "./styles/App.css"

function App() {

  return (
    <>
      <div className="app">
        <div className="menu-buttons"></div>
        
        <div className="app-sidebar">
          <h1>Personal Details</h1>
          <div className="sidebar">
            <FormPersonalDetails />
          </div>
        </div>
      </div>
    </>
  )
}

export default App