import React from "react";
import axios from "axios"
import { useState } from "react";
import Logo from "../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";
import Rectangle2 from "../../../public/verDetallesDeConsultaPaciente_Rectangle7.png"


function RegistroPaciente() {
  const [formState, setFormState] = useState({
    Dui: '',
    firstNames: '',
    lastNames: '',
    phone: '',
    sex: '',
    civilStatus: '',
    occupation: '',
    homeAddress: '',
    weight: '',
    height: '',
    symptoms: '',
    allergies: '',
    preExistingConditions: '',
    birthdate: ''
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://saludplusweb-production.up.railway.app/api/patients', formState);
      console.log(response.data);
      setFormState({
        Dui: '',
        firstNames: '',
        lastNames: '',
        phone: '',
        sex: '',
        civilStatus: '',
        occupation: '',
        homeAddress: '',
        weight: '',
        height: '',
        symptoms: '',
        allergies: '',
        preExistingConditions: '',
        birthdate: ''
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col flex flex-col" style={{
      backgroundImage: `url(${Rectangle2})`,
      backgroundSize: "cover",
      height: "150vh",
    }} >

      <div className="flex justify-center bg-[#0071ab] py-4">
        <img
          className="w-12 h-12 object-cover"
          alt="Logo SALUD PLUS"
          src={Logo}
        />
      </div>
      <div >

        <div className="min-h-full " >
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 ml-auto mr-auto w-full md:w-1/2 g-2">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Dui">
                DUI:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Dui"
                type="text"
                name="Dui"
                value={formState.Dui}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstNames"
              >
                Nombres:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstNames"
                type="text"
                name="firstNames"
                value={formState.firstNames}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastNames"
              >
                Apellidos:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastNames"
                type="text"
                name="lastNames"
                value={formState.lastNames}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Telefono:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="sex"
              >
                Sexo:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sex"
                type="text"
                name="sex"
                value={formState.sex}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="civilStatus"
              >
                Estado civil:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="civilStatus"
                type="text"
                name="civilStatus"
                value={formState.civilStatus}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="occupation"
              >
                Ocupacion:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="occupation"
                type="text"
                name="occupation"
                value={formState.occupation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="homeAddress"
              >
                Direccion:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="homeAddress"
                type="text"
                name="homeAddress"
                value={formState.homeAddress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="weight"
              >
                Peso:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="weight"
                type="text"
                name="weight"
                value={formState.weight}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="height"
              >
                Altura:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="text"
                name="height"
                value={formState.height}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="symptoms"
              >
                Sintomas:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="symptoms"
                type="text"
                name="symptoms"
                value={formState.symptoms}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="allergies"
              >
                Alergias:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="allergies"
                type="text"
                name="allergies"
                value={formState.allergies}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="preExistingConditions"
              >
                Condiciones preexistentes:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="preExistingConditions"
                type="text"
                name="preExistingConditions"
                value={formState.preExistingConditions}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="birthdate"
              >
                Fecha de nacimiento:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="birthdate"
                type="date"
                name="birthdate"
                value={formState.birthdate}
                onChange={handleChange}
                required
              />
            </div>




            {/* Repite este patrón para otros campos del formulario */}

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>


          </form>

        </div>



      </div>



      <div className="flex flex-col items-center justify-center bg-[#0071ab] py-4">
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

export default RegistroPaciente;
