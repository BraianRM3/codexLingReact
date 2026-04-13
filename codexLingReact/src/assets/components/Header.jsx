import logo from "../Images/logocodex.png";
function Header({ setPage, toggleMenu, search, setSearch, showSearch, setShowSearch }) {
   const handleHomeClick = () => {
    setPage("home");
    setSearch("");       // 🔥 Limpia búsqueda
    setShowSearch(false); // 🔥 Cierra buscador
  };
  return (
    <header>
      <div className="logo" onClick={handleHomeClick}>
        <div className="logo-icon">
            <img src={logo} alt="CodexLing Logo" />
        </div>
        <div className="logo-text">CODEXLING</div>
      </div>
      <div className="nav-icons">
      {/* INPUT QUE APARECE */}
      <div className="search-container">
        {showSearch && (
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-header"
          />
        )}
        </div>
        {/* 🔍 BUSCADOR */}
        <div className="nav-icon" onClick={() => setShowSearch(!showSearch)}>
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