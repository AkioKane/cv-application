import person from "../assets/person.svg";
import "../styles/ButtonsMenuSelector.css";

function ButtonsMenuSelector({ setActiveComponent }) {

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="group-btns-details">
        <button 
          id="personal" 
          className="menu-btns"
          onClick={() => handleButtonClick("personalDetails")}
        >
          <img src={person} alt="person" />
        </button>
        {/* <button 
          id="personal" 
          className="menu-btns"
          onClick={() => handleButtonClick("another")}
        >
          <img src={person} alt="person" />
        </button>
        <button id="personal" className="menu-btns">
          <img src={person} alt="person" />
        </button> */}
      </div>
    </>
  )
}

export default ButtonsMenuSelector