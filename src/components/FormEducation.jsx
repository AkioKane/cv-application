import { useState } from "react";
import { dataPerson, data } from "../data";
import "../styles/FormEducation.css"

function FormEducation() {
  return (
    <>
      <div className="head">
        <h1>Degree</h1>
        <button id="add-degree">+</button>
      </div>
      <div className="form-education"></div>
      <div className="points"></div>
    </>
  )
}

export default FormEducation