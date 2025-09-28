function DashboardStats({ patients, appointments }) {
  const totalPatients = patients.length;
  const pendingAppointments = appointments.filter(a => !a.done).length;
  const completedAppointments = appointments.filter(a => a.done).length;

  return (
    <div className="row text-center">
      <div className="col-md-4">
        <div className="card shadow-sm border-0 bg-info text-white">
          <div className="card-body">
            <h4>{totalPatients}</h4>
            <p>Pacientes Registrados</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm border-0 bg-warning text-dark">
          <div className="card-body">
            <h4>{pendingAppointments}</h4>
            <p>Turnos Pendientes</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm border-0 bg-success text-white">
          <div className="card-body">
            <h4>{completedAppointments}</h4>
            <p>Turnos Completados</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
