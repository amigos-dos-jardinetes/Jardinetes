import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe BrowserRouter em vez de Router
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Menu from '../pages/Menu';
import Config from '../pages/Config';
import Inventory from '../pages/inventory';
import PaginaInicial from '../pages/PaginaInicial';
import Contato from '../pages/Contato';
import Accept from '../pages/Accept';
import Form from '../pages/Form';
import Tree from '../pages/Tree';
import Impact from '../pages/Impact';
import JardinetesMap from '../pages/JardinetesMap';
import ImpactSolo from '../pages/ImpactSolo';
import AnaliseFinal from '../pages/AnaliseFinal';
import BemEstar from '../pages/BemEstar';
import Infraestrutura from '../pages/Infraestrutura';
import Seguranca from '../pages/Seguranca';
import Pertencimento from '../pages/Pertencimento';
import Redefinir from '../pages/redefinir';
import quemSomos from '../pages/quemSomos';
import acoesSociais from '../pages/acoesSociais';
import minhasAnalises from '../pages/minhasAnalises';
import moreInfo from '../pages/moreInfo';

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
        <Route path="/jardinetes-map" element={<JardinetesMap />} />
        <Route path="/impact-solo" element={<ImpactSolo />} />
        <Route path="/AnaliseFinal" element={<AnaliseFinal />} />
        <Route path="/BemEstar" element={<BemEstar />} />
        <Route path="/Infraestrutura" element={<Infraestrutura />} />
        <Route path="/Seguranca" element={<Seguranca />} />
        <Route path="/Pertencimento" element={<Pertencimento />} />
        <Route path="/redefinir" element={<Redefinir />} />
        <Route path="/quemSomos" element={<quemSomos />} />
        <Route path="/acoesSociais" element={<acoesSociais />} />
        <Route path="/minhasAnalises" element={<minhasAnalises />} />
        <Route path="/moreInfo" element={<moreInfo />} />
      </Routes>
    </Router>
  );
}
