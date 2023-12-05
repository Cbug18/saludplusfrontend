import React from "react";
import Rectangle from "../../../public/ingresarDoc_Rectangle6.png";
import Logo from "../../../public/fechasDelPaciente_LOGO_SALUD_PLUSremovebgpreview1.png";
import Logo2 from "../../../public/LOGO_SALUD_PLUS-removebg-preview 2.png";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/saludPlusConsume";
import { useState } from "react";
import MenuDoc from "../MenuDoc/MenuDoc"; 

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(formData);

      // Maneja la respuesta según tus necesidades
      console.log("Resultado del login:", result);

      // Almacena la información del usuario si el inicio de sesión es exitoso
      setUser(result); // Reemplaza con la estructura real de tu usuario
      setIsLoggedIn(true);

      // Navega al usuario a la página deseada
      navigate("/MenuDoc");
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      setError("Credenciales inválidas"); // Puedes ajustar el mensaje de error según tus necesidades
    }
  };

  if (isLoggedIn) {
    // Si el usuario está autenticado, renderiza el componente MenuDoc
    return <MenuDoc user={user} />;
  }

  return (
    <div>
      <div className="flex justify-center bg-[#0071ab] py-4">
        <img className="w-12 h-12 object-cover" alt="Logo SALUD PLUS" src={Logo} />
      </div>
      <div className="flex flex-col min-h-screen">
        <div
          className="relative bg-cover bg-center h-64"
          style={{
            backgroundImage: `url(${Rectangle})`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center w-2/5">
            <h1 className="font-serif text-customBlue text-5xl font-bold">
              Bienvenidos/as a{" "}
              <span className="text-customgray">SaludPlus</span>
            </h1>
          </div>

          <div className="flex items-center justify-start h-screen">
            <div className="flex-1 flex justify-center items-center">
              <form
                action=""
                className="flex flex-col gap-4 p-6 w-[70%]"
                onSubmit={handleSubmit}
              >
                <input
                  className="p-4 mt-8 rounded-xl border"
                  type="text"
                  name="username"
                  placeholder="usuario"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <div className="relative">
                  <input
                    className="p-4 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>

                  <button 
                  type= "submit"
                  className="bg-[#0071AB] rounded-lg text-white py-4 px-6 hover:scale-105 duration-300">
                    Login
                  </button>
              </form>
            </div>
            <div className="flex-1 hidden md:block flex justify-center items-center"> {/* Oculta en dispositivos móviles */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
                <picture>
                  <source
                    media="(min-width: 640px)"
                    srcSet={Logo2}
                  />
                  <img
                    src={Logo2}
                    alt="Logo SALUD PLUS"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </picture>
              </div>
            </div>
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
    </div>
  );
}
