
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [num, setNum] = useState();
  const [errorMessage, setErrorMessage] = useState(false)

  const ref = useRef();
  return (
    <div className="App">
    <h1>Please Enter Your 10 Digit Mobile Number For OTP Verification.</h1>
    <input
      className="numInput"
      placeholder="Mobile Number"
      type="text"
      value={num}
      onChange={(e) => {
        if(!/[0-9]/.test(e.key) && e.key != "Backspace")
        setNum(e.target.value.replace(/\D/g, ''))
        else
        setNum(e.target.value)}}
      maxLength="10"
    />
    { errorMessage && <ErrorMessage closeBox={ref} /> }
    <button
      className="openModalBtn"
      onClick={() => {
        num && num.length=="10" ?
        setModalOpen(true) : setErrorMessage(true)
      }}
    >
      Get OTP
    </button>

    {modalOpen && <Modal setOpenModal={setModalOpen} number={num} />}
  </div>
  );
}

export default App;
