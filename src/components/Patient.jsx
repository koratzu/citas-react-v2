function Patient({ patient, setPatient, deletePatient }) {
  const { name, owner, email, discharged, symptoms, id } = patient;

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient?"
    );
    if (confirmed) {
      deletePatient(id);
    }
  };

  return (
    <div className="mt-0 mb-5 mx-3 bg-white shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {""}
        <span className="font-normal normal-case">{discharged}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 md:px-10 px-7 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-md uppercase"
          type="button"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          className="py-2 md:px-10 px-7 bg-red-600 hover:bg-red-800 text-white font-bold rounded-md uppercase"
          type="button"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patient;
