/* TEXTO EN RULETA*/
function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span
          className="marquee-text"
          style={{ fontFamily: "VT323, monospace" }}
        >
          System.out.println("¡BIENVENIDOS A CODEXLING!")
          System.out.println("¡BIENVENIDOS A CODEXLING!")
          System.out.println("¡BIENVENIDOS A CODEXLING!")
          System.out.println("¡BIENVENIDOS A CODEXLING!")
        </span>
      </div>
    </div>
  );
}

export default Marquee;