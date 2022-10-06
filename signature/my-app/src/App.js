import React, { Component, useRef, useState, useEffect } from "react";
import SignatureCanvas from 'react-signature-canvas';
import './index.css';
function App() {
  const sigRef = useRef();
  const [signature, setSignature] = useState(null);

  const handleSignatureEnd = () => {
    setSignature(sigRef.toDataURL());
  }

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
      canvasProps={{ className: 'signature' }}
      ref={sigRef}
    />
    <button onClick={clearSignature}>Clear</button>
    <button onClick={handleSignatureEnd}>Get URL</button>
    <div style={{ width: "500px", wordBreak: "break-all" }}>{signature}</div>
  </div>
  );
}

export default App;
