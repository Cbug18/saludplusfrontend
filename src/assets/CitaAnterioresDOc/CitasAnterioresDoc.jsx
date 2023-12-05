import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";
import Rectangle2 from "../../public/Desktop1_Rectangle5.png";
import axios from 'axios';

const CitasAnterioresDoc= () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch medical appointments data
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('https://saludplusweb-production.up.railway.app/api/getMedicalAppointments');
                const { data } = response.data;
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching medical appointments:', error);
            }
        };

        // Call the fetchAppointments function
        fetchAppointments();
    }, []);

    return (
        <div className="flex flex-col flex flex-col bg-gray-100 ">
            <div
                className="relative bg-cover bg-center h-64"
                style={{
                    backgroundImage: `url(${Rectangle2})`,
                    backgroundSize: "cover",
                    height: "100vh",
                }}
            >
                <div>
                    <div className="bg-[#0071ab] text-white py-4">
                        <div className="container mx-auto flex justify-center">
                            <img
                                className="w-12 h-12 object-cover"
                                alt="Logo SALUD PLUS"
                                src={Logo}
                            />
                        </div>
                    </div>
                </div>

                <Link to='/MenuDoc'>
                    <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                        Regresar
                    </button>
                </Link>

                <div className='mt-10 mb-10 flex items-center justify-center'>
                    <h1 className="font-serif text-customBlue text-5xl font-bold">Pacientes <span className='text-customgray'>Agendados</span></h1>
                </div>

                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-3/5 mx-auto">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">nombre</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">sintomas</th>
                                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Fecha De cita</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">celular</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {appointments.map((appointment) => (
                                <tr key={appointment._id} className="bg-white">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{appointment.name}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{appointment.symptoms}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{appointment.dateOfAppointment}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{appointment.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {appointments.map((appointment) => (
                        <div key={appointment._id} className="bg-white space-y-3 p-4 rounded-lg shadow">
                            <div className="flex items-center space-x-2 text-sm">
                                <div className="text-sm text-gray-700">{appointment.name}</div>
                                <div className="text-sm text-gray-700">{appointment.symptoms}</div>
                                <div className="text-sm text-gray-700">{appointment.dateOfAppointment}</div>
                                <div className="text-sm text-gray-700">{appointment.phone}</div>
                            </div>
                        </div>
                    ))}
                </div>
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

export default CitasAnterioresDoc;
