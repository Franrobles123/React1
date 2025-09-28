function AppointmentList({ appointments, onToggle }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">📅 Turnos</h5>
      </div>
      <ul className="list-group list-group-flush">
        {appointments.map((a) => (
          <li
            key={a.id}
            className={`list-group-item d-flex justify-content-between align-items-center`}
          >
            <span>
              <strong>{a.patient}</strong> - {a.date}
              {a.done ? (
                <span className="badge bg-success ms-2">Completado</span>
              ) : (
                <span className="badge bg-warning text-dark ms-2">Pendiente</span>
              )}
            </span>
            <button
              className={`btn btn-sm ${
                a.done ? "btn-outline-secondary" : "btn-outline-success"
              }`}
              onClick={() => onToggle(a.id)}
            >
              {a.done ? "Desmarcar" : "Marcar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;

