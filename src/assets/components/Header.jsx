import logo from "../img/logocodex.png";
function Header({ setPage, toggleMenu }) {
  return (
    <header>
      <div className="logo" onClick={() => setPage("home")}>
        <div className="logo-icon">
            <img 
              src={logo}
              alt="CodexLing Logo"
              style={{ width: "60px" }} />
        </div>
        <div 
          nst className="logo-text"
          style={{
            fontFamily: "VT323, monospace",
            fontSize: "50px"
          }}   
        >CODEXLING</div>
      </div>

      <div className="nav-icons">
        <div className="nav-icon">
          <i className="fas fa-search"></i>
        </div>

        <div className="nav-icon">
          <i className="fas fa-user"></i>
        </div>

        <div className="nav-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;