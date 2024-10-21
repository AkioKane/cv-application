import FormPersonalDetails from "./FormPersonalDetails"

function Sidebar({ activeComponent, setActiveComponent, setActiveButton }) {
  const renderComponent = () => {
    switch (activeComponent) {
      case 'personalDetails':
        return (<FormPersonalDetails 
          setActiveComponent={setActiveComponent}  
        />)
      case "education":
        return <h1>Hello world</h1>
      default:
        return (<FormPersonalDetails 
          setActiveComponent={setActiveComponent} 
        />)
    }
  }

  return (
    <>
      <div className="sidebar">
        {renderComponent()}
      </div>
    </>
  )
}

export default Sidebar