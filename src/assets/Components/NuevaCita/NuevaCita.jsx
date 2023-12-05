import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";
import Rectangle from "../../../public/Desktop1_Rectangle5.png";
import "tailwindcss/tailwind.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import axios from "axios";

export default function NuevaCita() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [symptoms, setSymptoms] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState(""); // Nuevo estado para el nombre

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedDate && symptoms && phone && name) {
      try {
        const response = await axios.post(
          "https://saludplusweb-production.up.railway.app/api/medicalAppointments",
          {
            dateOfAppointment: selectedDate,
            symptoms,
            phone,
            name, // Incluye el nombre en la solicitud
          }
        );

        console.log(response.data);
        Swal.fire({
          title: "Cita médica agendada!",
          text: "Su cita médica ha sido agendada exitosamente.",
          icon: "success",
          confirmButtonText: "Regresar al menu",
        }).then(() => {
          window.location.href = "/MenuPa";
        });
      } catch (error) {
        console.error("Error al enviar la cita médica:", error);
      }
    } else {
      Swal.fire({
        title: "Error!",
        text:
          "Seleccione una fecha, complete todos los campos y describa los síntomas antes de enviar el formulario.",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div>
      <div
        className="flex flex-col min-h-screen bg-gray-100"
        style={{
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover",
          height: "100vh",
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

        <Link to="/MenuPa">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
            Regresar
          </button>
        </Link>

        <div className="container mx-auto mt-8 p-6 rounded-md mt-64 ">
          <h2 className="font-serif text-customBlue text-4xl font-bold g-4">
            Complete los campos para agendar su cita medica
          </h2>

          <div className="flex space-x-6">
            <div className="w-1/2">
              <label
                className="font-serif text-customgray text-lg font-bold"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="w-1/2">
              <label
                className="font-serif text-customgray text-lg font-bold"
                htmlFor="symptoms"
              >
                Síntomas
              </label>
              <input
                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="symptoms"
                id="symptoms"
                value={symptoms}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-1/2">
              <label
                className="font-serif text-customgray text-lg font-bold"
                htmlFor="phone"
              >
                Número de contacto
              </label>
              <input
                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <div className="mt-6">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Seleccione una fecha"
              className="p-4 border border-gray-300 rounded-md"
            />
          </div>

          <button
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md"
            onClick={handleSubmit}
          >
            Confirmar
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#0071ab] py-4 ">
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
