import { useState } from "react";
import person from "../assets/person.svg";
import personWhite from "../assets/personWhite.svg";
import education from "../assets/education.svg";
import educationWhite from "../assets/educationWhite.svg";
import "../styles/ButtonsMenuSelector.css";

function ButtonsMenuSelector({ setActiveComponent }) {
  const [activeButton, setActiveButton] = useState("personalDetails")

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };

  const replaceImgButton = (component) => {
    let blackImg = "";
    let whiteImg = "";

    switch (component) {
      case "personalDetails":
        blackImg = person;
        whiteImg = personWhite;
        break;
      case "education":
        blackImg = education;
        whiteImg = educationWhite;
        break;
    }

    if (activeButton === component) {
      return (
        <>
          <img src={whiteImg} alt={component === "personalDetails" ? "person" : component} />
        </>
      )
    } else {
      return (
        <>
          <img src={blackImg} alt={component === "personalDetails" ? "person" : component} />
        </>
      )
    }
  }

  return (
    <>
      <div className="group-btns-details">
        <button 
          id="personal" 
          className={`menu-btns ${activeButton === "personalDetails" ? "selected-button-menu" : ""}`}
          onClick={() => handleButtonClick("personalDetails")}
        >
          {replaceImgButton("personalDetails")}
        </button>
        <button 
          id="education" 
          className={`menu-btns ${activeButton === "education" ? "selected-button-menu" : ""}`}
          onClick={() => handleButtonClick("education")}
        >
          {replaceImgButton("education")}
        </button>
      </div>
    </>
  )
}

export default ButtonsMenuSelector