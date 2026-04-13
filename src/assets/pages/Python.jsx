import React, { useState } from "react";
import imagenvideo from "../img/videopython.jpg";
import logo from "../img/python.png";

function Html() {
  const [mensaje, setMensaje] = useState(false);

  const handlePlay = () => {
    setMensaje(true);
    setTimeout(() => setMensaje(false), 2000);
  };

  return (
    <main>
      <div className="course-detail">

  <div className="top-section">
    <div className="card-html">
      <img src={logo} alt="Java logo" />
    </div>

    <div className="video-container">
      <img
        src={imagenvideo}
        className="video-placeholder"
        alt="Video Python Prueba"
      />

      <button type="button" className="play-button" onClick={handlePlay}>
        ▶
      </button>
    </div>
  </div>

  {mensaje && (
    <div className="mensaje-video">
      ▶ Reproduciendo video...
    </div>
  )}

  <div className="course-description">
    <h2>Python</h2>
    <p>Python es un lenguaje de programación versátil y fácil de aprender, usado en web, datos y automatización. Destaca por su sintaxis simple y su gran variedad de librerías.</p>
  </div>

</div>
    </main>
  );
}

export default Html;