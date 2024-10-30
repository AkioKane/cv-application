import { useState } from "react";
import person from "../assets/person.svg";
import personWhite from "../assets/personWhite.svg";
import education from "../assets/education.svg";
import educationWhite from "../assets/educationWhite.svg";
import experience from "../assets/experience.svg";
import experienceWhite from "../assets/experienceWhite.svg";
import preview from "../assets/preview.svg";
import previewWhite from "../assets/previewWhite.svg";
import previewOff from "../assets/previewOff.svg";
import previewOffWhite from "../assets/previewOffWhite.svg";
import "../styles/ButtonsMenuSelector.css";

function ButtonsMenuSelector({ activeButtonMenu, setActiveButtonMenu, setActiveComponent, setNameTag, setLivePreviewVisible, livePreviewVisible }) {
  const [indexClickLivePreview, setIndexClickLivePreview] = useState(0)

  const handleButtonClick = (component) => {
    if (component === "livePreview") {
      if (livePreviewVisible === true) {
        return setLivePreviewVisible(false)
      }
      return setLivePreviewVisible(true)
    }

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
      case "experience":
        blackImg = experience;
        whiteImg = experienceWhite;
        break;
      case "livePreview":
        blackImg = preview;
        whiteImg = previewWhite;
        if (indexClickLivePreview % 2 !== 0) {
          blackImg = previewOff;
          whiteImg = previewOffWhite;
        }
        break;
    }

    if (activeButtonMenu === component) {
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
          className={`menu-btns ${activeButtonMenu === "personalDetails" ? "selected-button-menu" : ""}`}
          onClick={() => handleButtonClick("personalDetails")}
        >
          {replaceImgButton("personalDetails")}
        </button>
        <button 
          id="education" 
          className={`menu-btns ${activeButtonMenu === "education" ? "selected-button-menu" : ""}`}
          onClick={() => handleButtonClick("education")}
        >
          {replaceImgButton("education")}
        </button>
        <button 
          id="experience" 
          className={`menu-btns ${activeButtonMenu === "experience" ? "selected-button-menu" : ""}`}
          onClick={() => handleButtonClick("experience")}
        >
          {replaceImgButton("experience")}
        </button>
        <button 
          id="live-preview" 
          className={`menu-btns ${activeButtonMenu === "livePreview" ? "selected-button-menu" : ""}`}
          onClick={(e) => {
            handleButtonClick("livePreview")
            setIndexClickLivePreview(indexClickLivePreview + 1)
          }}
        >
          {replaceImgButton("livePreview")}
        </button>
      </div>
    </>
  )
}

export default ButtonsMenuSelector