import Patient from "./Patient";

function PatientList({ patients, setPatient, deletePatient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">
            {patients.map((patient) => {
              return (
                <Patient
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                  deletePatient={deletePatient}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes y {""}
            <span className="text-indigo-600 font-bold">
              aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatientList;
