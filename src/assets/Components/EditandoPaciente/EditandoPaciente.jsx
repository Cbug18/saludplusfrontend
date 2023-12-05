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
        className="relative bg-cover bg-center"
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

        <div className="my-4 container mx-auto">
          <label htmlFor="searchTerm" className="text-black">
            Buscar Paciente por Nombre:
          </label>
          <div className="flex">
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>

        {patientData.Dui && (
          <form onSubmit={handleEditSubmit} className="form-paciente p-4 container mx-auto">
            <h2 className="text-lg font-bold mb-4">Editar Paciente</h2>

            {/* ... (campos del formulario) */}

            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
