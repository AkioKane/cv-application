import "../styles/LivePreview.css";

function LivePreview({ livePreviewVisible, setLivePreviewVisible }) {
  return (
    <>
      <div 
        className="live-preview"
        style={{display: livePreviewVisible ? "block" : "none"}}
      >

      </div>
    </>
  )
}

export default LivePreview