import "../styles/LivePreview.css";

function GenerateElementEducation({ element }) {
  return (
    <>
      <h4>{element.univerName}</h4>
      <span>{element.degree}</span>
      <span>{element.graduation}</span>
      <span 
        style={{
          marginBottom: "15px"
        }}
      >{element.address}</span>
    </>
  )
}

function GenerateElementExperience({ element }) {
  return (
    <>
      <h4>{element.companyName}</h4>
      <span>{element.title}</span>
      <span>{element.duration}</span>
      <span 
        style={{
          marginBottom: "15px"
        }}
      >{element.address}</span>
    </>
  )
}

function LivePreview({
  livePreviewVisible,
  personInfo,
  educationInfo,
  experienceInfo
}) {
  const educationInfoGenerate = () => {
    if (educationInfo !== null) {
      return educationInfo.map((item, index) => (
        <GenerateElementEducation key={index} element={item}/>
      ))
    }
  }

  const experienceInfoGenerate = () => {
    if (experienceInfo !== null) {
      return experienceInfo.map((item, index) => (
        <GenerateElementExperience key={index} element={item}/>
      ))
    }
  }

  return (
    <>
      <div
        className="live-preview"
        style={{ display: livePreviewVisible ? "block" : "none" }}
      >
        <h1>{ personInfo !== null && personInfo.fullName  ? personInfo.fullName : "" }</h1>
        <span>{ personInfo !== null && personInfo.job ? personInfo.job : "" }</span>
        <div className="head-container-live-preview">
          <span>{ personInfo !== null && personInfo.phone ? personInfo.phone : "" }</span>
          <span>{ personInfo !== null && personInfo.address ? personInfo.address : "" }</span>
        </div>
        <div className="links-live-preview">
          <a 
            href={ personInfo !== null && personInfo.mail ? personInfo.mail : "" }
          >{ personInfo !== null && personInfo.mail ? personInfo.mail : "" }</a>
        </div>
        <hr 
          style={{
            display: personInfo ? "block" : "none"
          }} 
        />
        <span>{ personInfo !== null && personInfo.summary ? personInfo.summary : "" }</span>

        <div 
          className="education-info-live-preview" 
          style={{
            display: educationInfo ? "block" : "none"
          }}
        >
          <hr />
          <h2
            style={{
              marginBottom: "3px"
            }}
          >Education</h2>
          { educationInfoGenerate() }
        </div>

        <div
          className="experience-info-live-preview"
          style={{
            display: experienceInfo ? "block" : "none"
          }}
        >
          <hr />
          <h2
            style={{
              marginBottom: "3px"
            }}
          >Experience</h2>
          { experienceInfoGenerate() }
        </div>

      </div>
    </>
  );
}

export default LivePreview