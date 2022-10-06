import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from 'react-signature-canvas';
import './index.css';
function App() {
  const sigRef = useRef();
  const [signature, setSignature] = useState(null);

  const trimSignature = () => setSignature(sigRef.current.getTrimmedCanvas().toDataURL("image/png"));

  const clearSignature = () => {
    sigRef.current.clear();
    setSignature(null);
  }

  useEffect(() => {
    console.log(signature);
  }, [signature]);

  return (<div>
    <SignatureCanvas
      penColor="black"
      canvasProps={{ className: "signature" }}
      ref={sigRef}
    />

    <button onClick={clearSignature}>Clear</button>
    <button onClick={trimSignature}>Trim</button>

    {
      signature ? (<img
        src={signature}
        alt="mi firma"
        style={{
          display: "block",
          height: "200px",
          margin: "100px",
          border: "2px solid black",
          width: "500px",
        }}
      />) : null
    }
  </div >
  );
}

export default App;
