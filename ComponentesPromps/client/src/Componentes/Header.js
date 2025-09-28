function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        {/* Marca de la app */}
        <span className="navbar-brand fw-bold">
          🏥 Sistema de Salud
        </span>

        {/* Menú de navegación */}
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" href="#pacientes">
            Pacientes
          </a>
          <a className="nav-link" href="#turnos">
            Turnos
          </a>
          <a className="nav-link" href="#reportes">
            Reportes
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

