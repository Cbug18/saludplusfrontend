import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";
import Rectangle from "../../../public/ingresarDoc_Rectangle6.png";

const CitaAnterior = () => {
    const [selectedDate, handleDateChange] = useState(new Date());

    const handleSubmit = () => {
        // Lógica para enviar la fecha seleccionada a la API
        console.log("Fecha seleccionada:", selectedDate);
    };

    return (
        <div className="flex flex-col flex flex-col">

            <div
                className="relative bg-cover bg-center h-64"
                style={{
                    backgroundImage: `url(${Rectangle})`,
                    backgroundSize: "cover",
                    height: "100vh",
                }}
            >
                <div className="flex justify-center bg-[#0071ab] py-4">
                    <img
                        className="w-12 h-12 object-cover"
                        alt="Logo SALUD PLUS"
                        src={Logo}
                    />
                </div>

                <Link to='/MenuPa'>
                    <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                        Regresar
                    </button>
                </Link>

                <div className="flex flex-col flex flex-col">
                    <div className="mt-6">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Seleccione una fecha"
                            className="p-4 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold">Detalles de consulta</h1>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="symptoms">Síntomas</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="symptoms"
                                id="symptoms"
                            />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="weight">Peso</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="weight"
                                id="weight"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="height">Altura</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="height"
                                id="height"
                            />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="medication">Medicamento</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="medication"
                                id="medication"
                            />
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="frequency">Frecuencia</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="frequency"
                                id="frequency"
                            />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="dose">Dosis</label>
                            <input
                                className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text"
                                name="dose"
                                id="dose"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="notes">Notas de consulta</label>
                        <input
                            className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text"
                            name="notes"
                            id="notes"
                        />
                    </div>
                </form>
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
};

export default CitaAnterior;