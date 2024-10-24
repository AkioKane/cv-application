import person from "../assets/person.svg";
import personWhite from "../assets/personWhite.svg";
import education from "../assets/education.svg";
import educationWhite from "../assets/educationWhite.svg";
import "../styles/ButtonsMenuSelector.css";

function ButtonsMenuSelector({ activeButtonMenu, setActiveButtonMenu, setActiveComponent, setNameTag }) {
  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButtonMenu(component);

    if (component === "personalDetails") {
      setNameTag("Personal Details")
    } else if (component === "education") {
      setNameTag("Education")
    }
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
      </div>
    </>
  )
}

export default ButtonsMenuSelector