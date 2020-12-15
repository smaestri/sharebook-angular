import './App.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">
      <img src="/assets/logo.jpg" width="30" height="30" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" >Mes livres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Mes emprunts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Livres disponibles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cursor-link">Se déconnecter</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;
