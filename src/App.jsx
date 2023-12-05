import Desktop1 from './assets/Components/Desktop/Desktop1'
import Login from './assets/Components/Login/Login'
import LoginPac from './assets/Components/Login/LoginPac'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuDoc from './assets/Components/MenuDoc/MenuDoc'
import MenuPa from './assets/Components/MenuPaciente/MenuPa'
import RegistroPaciente from './assets/Components/registrandoPaciente/RegistroPaciente'
import EditarPaciente from './assets/Components/EditandoPaciente/EditandoPaciente';
import NuevaCita from './assets/Components/NuevaCita/NuevaCita';
import ProximaCita from './assets/Components/ProximaCita/ProximaCita';
import CitasAnterior from './assets/Components/CItasAnterior/CitasAnterior';
import CitasAnterioresDoc from './assets/CitaAnterioresDOc/CitasAnterioresDoc';
import Pacientesagendados from './assets/Components/Pacientesagendados/Pacientesagendados';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/LoginPac" element={<LoginPac />}/>
      <Route path="/MenuDoc" element={<MenuDoc />}/>
      <Route path="/MenuPa" element={<MenuPa />}/>
      <Route path="/RegistroPaciente" element={<RegistroPaciente />}/>
      <Route path="/EditandoPaciente" element={<EditarPaciente />}/>
      <Route path="/NuevaCita" element={<NuevaCita />}/>
      <Route path="/ProximaCita" element={<ProximaCita />}/>
      <Route path="/CitasAnterior" element={<CitasAnterior />}/>
      <Route path="/CitasAnterioresDoc" element={<CitasAnterioresDoc />}/>
      <Route path="/Pacientesagendados" element={<Pacientesagendados />}/>
    </Routes>
  </Router>

  )
}

export default App