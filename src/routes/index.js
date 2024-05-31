import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe BrowserRouter em vez de Router
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Menu from '../pages/Menu';
import Config from '../pages/Config';
import Inventory from '../pages/Inventory';
import PaginaInicial from '../pages/PaginaInicial';
import Contato from '../pages/Contato';
import Accept from '../pages/Accept';
import Form from '../pages/Form';
import Tree from '../pages/Tree';
import Impact from '../pages/Impact';
import MeusJardinetes from '../pages/MeusJardinetes';
import JardinetesMap from '../pages/JardinetesMap';
import ImpactSolo from '../pages/ImpactSolo';
import AnaliseFinal from '../pages/AnaliseFinal';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/config" element={<Config />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/accept" element={<Accept />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/meus-jardinetes" element={<MeusJardinetes />} />
        <Route path="/jardinetes-map" element={<JardinetesMap />} />
        <Route path="/impact-solo" element={<ImpactSolo />} />
        <Route path="/AnaliseFinal" element={<AnaliseFinal />} />
      </Routes>
    </Router>
  );
}
