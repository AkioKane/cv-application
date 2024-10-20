import FormPersonalDetails from "./FormPersonalDetails"

function Sidebar({ activeComponent }) {
  const renderComponent = () => {
    switch (activeComponent) {
      case 'personalDetails':
        return <FormPersonalDetails />
      case "education":
        return <h1>Hello world</h1>
      default:
        return <FormPersonalDetails />
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