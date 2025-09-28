import React, { useState } from "react";
import Header from "./Componentes/Header";
import DashboardStats from "./Componentes/DashboardStats";
import PatientTable from "./Componentes/PatientTable";
import AppointmentList from "./Componentes/AppointmentList";
import AddPatientModal from "./Componentes/AddPatientModal";

function App() {
  const [patients, setPatients] = useState([
    { id: "p1", name: "Juan Pérez", age: 45, condition: "Hipertensión" },
    { id: "p2", name: "Ana López", age: 32, condition: "Diabetes tipo II" },
  ]);

  const [appointments, setAppointments] = useState([
    { id: "a1", patient: "Juan Pérez", date: "2025-10-01", done: false },
    { id: "a2", patient: "Ana López", date: "2025-10-03", done: true },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addPatient = (patient) => {
    setPatients([...patients, { id: "p" + (patients.length + 1), ...patient }]);
  };

  const markAppointmentDone = (id) => {
    setAppointments(
      appointments.map((a) =>
        a.id === id ? { ...a, done: !a.done } : a
      )
    );
  };

  return (
    <div>
      <Header />

      <div className="container mt-4">
        <DashboardStats patients={patients} appointments={appointments} />

        <div className="row mt-4">
          <div className="col-md-7">
            <PatientTable patients={patients} onAdd={() => setShowModal(true)} />
          </div>
          <div className="col-md-5">
            <AppointmentList appointments={appointments} onToggle={markAppointmentDone} />
          </div>
        </div>
      </div>

      <AddPatientModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={addPatient}
      />
    </div>
  );
}

export default App;




