
import React, { useState } from "react";
import axios from "axios";
import Rectangle2 from "../../../public/Desktop1_Rectangle5.png";
import Logo from "../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";

function EditarPaciente() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formChanges, setFormChanges] = useState({});
  const [patientData, setPatientData] = useState({
    id: "",
    Dui: "",
    firstNames: "",
    lastNames: "",
    phone: "",
    sex: "",
    civilStatus: "",
    occupation: "",
    homeAddress: "",
    weight: "",
    height: "",
    symptoms: "",
    allergies: "",
    preExistingConditions: "",
    birthdate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
    setFormChanges({
      ...formChanges,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://saludplusweb-production.up.railway.app/api/getpatients?name=${searchTerm}`
      );

      if (response.data.data && response.data.data.length > 0) {
        const foundPatient = response.data.data[0];

        setPatientData({
          ...foundPatient,
          id: foundPatient._id,
        });

        setFormChanges({
          ...formChanges,
          id: foundPatient._id,
        });
      } else {
        setPatientData({
          id: "",
          Dui: "",
          firstNames: "",
          lastNames: "",
          phone: "",
          sex: "",
          civilStatus: "",
          occupation: "",
          homeAddress: "",
          weight: "",
          height: "",
          symptoms: "",
          allergies: "",
          preExistingConditions: "",
          birthdate: "",
        });
      }
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      const { id } = formChanges;
      const response = await axios.patch(
        `https://saludplusweb-production.up.railway.app/api/updatepatients/${id}`,
        formChanges
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };

  return (
    <div className="editar-paciente flex flex-col bg-blue-50">
      <div
        className="relative bg-cover bg-center h-4/5"
        style={{
          backgroundImage: `url(${Rectangle2})`,
          backgroundSize: "cover",
          height: "140vh",
        }}
      >
        <div className="bg-[#0071ab] text-white py-4">
          <div className="container mx-auto flex justify-center">
            <img
              className="w-12 h-12 object-cover"
              alt="Logo SALUD PLUS"
              src={Logo}
            />
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/MenuDoc">Volver</a>
        </button>

        <div className="my-4">
          <label htmlFor="searchTerm" className="text-black">
            Buscar Paciente por Nombre:
          </label>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>

        {patientData.Dui && (
          <form
            onSubmit={handleEditSubmit}
            className="form-paciente p-4 w-3/5"
          >
            <h2 className="text-lg font-bold mb-4">Editar Paciente</h2>

            <label htmlFor="Dui">DUI:</label>
            <br />
            <input
              type="text"
              id="Dui"
              name="Dui"
              value={patientData.Dui}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="firstNames">Nombres:</label>
            <br />
            <input
              type="text"
              id="firstNames"
              name="firstNames"
              value={patientData.firstNames}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="lastNames">Apellidos:</label>
            <br />
            <input
              type="text"
              id="lastNames"
              name="lastNames"
              value={patientData.lastNames}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="phone">Teléfono:</label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              value={patientData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="sex">Sexo:</label>
            <br />
            <input
              type="text"
              id="sex"
              name="sex"
              value={patientData.sex}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="civilStatus">Estado Civil:</label>
            <br />
            <input
              type="text"
              id="civilStatus"
              name="civilStatus"
              value={patientData.civilStatus}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="occupation">Ocupación:</label>
            <br />
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={patientData.occupation}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="homeAddress">Dirección:</label>
            <br />
            <input
              type="text"
              id="homeAddress"
              name="homeAddress"
              value={patientData.homeAddress}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="weight">Peso:</label>
            <br />
            <input
              type="text"
              id="weight"
              name="weight"
              value={patientData.weight}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="height">Altura:</label>
            <br />
            <input
              type="text"
              id="height"
              name="height"
              value={patientData.height}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="symptoms">Síntomas:</label>
            <br />
            <input
              type="text"
              id="symptoms"
              name="symptoms"
              value={patientData.symptoms}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="allergies">Alergias:</label>
            <br />
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={patientData.allergies}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="preExistingConditions">Enfermedades Previas:</label>
            <br />
            <input
              type="text"
              id="preExistingConditions"
              name="preExistingConditions"
              value={patientData.preExistingConditions}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <label htmlFor="birthdate">Fecha de Nacimiento:</label>
            <br />
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              value={patientData.birthdate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />

            <button
              type="submit"
              className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Guardar Cambios
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-col items-center justify-center bg-[#0071ab] py-4 m-0">
        <img
          className="w-12 h-12 object-cover"
          alt="Logo SALUD PLUS"
          src={Logo}
        />
        <div>
          <p className="text-base p-2 text-white text-center">
            SaludPlus Cuidando tu bienestar, siempre a tu lado.
          </p>
          <p className="text-xs text-white text-center">© 2023 SaludPlus</p>
        </div>
      </div>
    </div>
  );
}

export default EditarPaciente;
