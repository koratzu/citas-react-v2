import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ patients, setPatients, patient, setPatient }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [discharged, setDischarged] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischarged(patient.discharged);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validadciones
    if ([name, owner, email, discharged, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Crear el nuevo paciente
    const newPatient = {
      name,
      owner,
      email,
      discharged,
      symptoms,
    };

    if (patient.id) {
      //Actualizar paciente
      newPatient.id = patient.id;
      const patientsUpdated = patients.map((patientState) =>
        patientState.id === patient.id ? newPatient : patientState
      );

      setPatients(patientsUpdated);
      setPatient({});
    } else {
      //Agregar paciente
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    //Resetear el form
    setName("");
    setOwner("");
    setEmail("");
    setDischarged("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="pet-name"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="pet-name"
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="owner-name"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="owner-name"
            type="text"
            placeholder="Nombre del propietario"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            type="email"
            placeholder="Email propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="discharged"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-white rounded-md"
            id="discharged"
            type="date"
            value={discharged}
            onChange={(e) => setDischarged(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="symptoms"
            type="text"
            placeholder="Describa los sintomas de la mascota"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          type="submit"
          value={patient.id ? "Actualizar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}

export default Form;
