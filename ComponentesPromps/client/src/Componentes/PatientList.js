function PatientList({ patients, onAdd }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">👨‍⚕️ Pacientes</h5>
      </div>
      <ul className="list-group list-group-flush">
        {patients.map((p) => (
          <li key={p.id} className="list-group-item">
            <strong>{p.name}</strong> ({p.age} años) -{" "}
            <span className="text-muted">{p.condition}</span>
          </li>
        ))}
      </ul>
      <div className="card-footer text-end">
        <button className="btn btn-sm btn-success" onClick={onAdd}>
          ➕ Agregar Paciente
        </button>
      </div>
    </div>
  );
}

export default PatientList;
