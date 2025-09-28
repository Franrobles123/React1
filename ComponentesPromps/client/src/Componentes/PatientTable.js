function PatientTable({ patients, onAdd }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">👨‍⚕️ Pacientes</h5>
        <button className="btn btn-light btn-sm" onClick={onAdd}>
          ➕ Agregar
        </button>
      </div>
      <div className="table-responsive">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Condición</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td><strong>{p.name}</strong></td>
                <td>{p.age}</td>
                <td>{p.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientTable;
