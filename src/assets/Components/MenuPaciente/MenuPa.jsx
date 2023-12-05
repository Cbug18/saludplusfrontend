import React from "react";
import "../../../../src/index.css";
import Rectangle from "../../../public/ingresarDoc_Rectangle6.png";
import Rectangle2 from "../../../public/detallesConsultaEnCurso_Rectangle7.png";
import Mapa from "../../../public/Desktop1_image2.png";
import Logo from "../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";
import Ver from "../../../public/Menudoc_image6.png";
import Detalle from "../../../public/Menudoc_image6.png";
import Detalleant from "../../../public/Menudoc_image7.png";
import Agenda from "../../../public/Menudoc_image5.png";
import Nuevo from "../../../public/Menudoc_image4.png";
import formularioPaciente from "../registrandoPaciente/RegistroPaciente";
import { Link } from "react-router-dom";
import Card from "../MenuDoc/Card";
import Imagen9 from '../../../public/Menudoc_image9.png';
import Imagen4 from '../../../public/Menudoc_image4.png';

export default function MenuPa() {
  return (
    <div className="flex flex-col flex flex-col" >
      <div className="flex justify-center bg-[#0071ab] py-4">
        <img
          className="w-12 h-12 object-cover"
          alt="Logo SALUD PLUS"
          src={Logo}
        />
      </div>

      {/* Primer Color Sólido */}
      <div className="flex flex-col min-h-screen relative items-center gap-8 p-4" style={{ backgroundImage: `url(${Rectangle2})`, backgroundSize: 'cover', height: '100vh' }} >

        <div className="text-black text-center w-2/5 mt-16">
        <h1 className="font-serif text-customBlue text-5xl font-bold">Bienvenido/a estimado <span className='text-customgray'> Usuario de SaludPlus</span></h1>
        </div>



        <div className="flex flex-1 flex-wrap justify-center items-center gap-4">
          <Card title="Agendar Cita" image={Imagen9} path="/NuevaCita" />
          <Card title="Proxima Cita" image={Imagen4} path="/ProximaCita" />
          <Card title="Ver detalle de Cita Anterior" image={Detalle} path="/CitasAnterior" />
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
}
