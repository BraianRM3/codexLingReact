function MobileMenu({ menuOpen, toggleMenu, setPage }) {
  return (
    <>
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-menu" onClick={toggleMenu}>X</div>

        <a onClick={() => { setPage("home"); toggleMenu(); }}>Inicio</a>
        <a onClick={() => { setPage("html"); toggleMenu(); }}>HTML</a>
        <a onClick={() => { setPage("python"); toggleMenu(); }}>Python</a>
        <a onClick={() => { setPage("java"); toggleMenu(); }}>Java</a>
        <a onClick={() => { setPage("php"); toggleMenu(); }}>PHP</a>
      </div>
    </>
  );
}

export default MobileMenu;