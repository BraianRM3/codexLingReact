import logo from "../Images/logocodex.png";
function Header({ setPage, toggleMenu }) {
  return (
    <header>
      <div className="logo" onClick={() => setPage("home")}>
        <div className="logo-icon">
            <img src={logo} alt="CodexLing Logo" />
        </div>
        <div className="logo-text">CODEXLING</div>
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