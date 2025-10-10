import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Menu from './src/pages/Menu';
import Config from './src/pages/Config';
import Inventory from './src/pages/inventory';
import PaginaInicial from './src/pages/PaginaInicial';
import Contato from './src/pages/Contato';
import Accept from './src/pages/Accept';
import Form from './src/pages/Form';
import Tree from './src/pages/Tree';
import Impact from './src/pages/Impact';
import JardinetesMap from './src/pages/JardinetesMap';
import ImpactSolo from './src/pages/ImpactSolo';
import AnaliseFinal from './src/pages/AnaliseFinal';
import BemEstar from './src/pages/BemEstar';
import Infraestrutura from './src/pages/Infraestrutura';
import Seguranca from './src/pages/Seguranca';
import Pertencimento from './src/pages/Pertencimento';
import Redefinir from './src/pages/redefinir';
import quemSomos from './src/pages/quemSomos';
import acoesSociais from './src/pages/acoesSociais';
import minhasAnalises from './src/pages/minhasAnalises';
import moreInfo from './src/pages/moreInfo';
import moreInfo2 from './src/pages/moreInfo2';
import Form2 from './src/pages/Form2';
import Inventory2 from './src/pages/inventory2';
import Tree2 from './src/pages/Tree2';
import Impact2 from './src/pages/Impact2';
import Admin from './src/pages/admin';

export default function WebNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/config" element={<Config />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/accept" element={<Accept />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/jardinetesmap" element={<JardinetesMap />} />
        <Route path="/impactsolo" element={<ImpactSolo />} />
        <Route path="/analisefinal" element={<AnaliseFinal />} />
        <Route path="/bemestar" element={<BemEstar />} />
        <Route path="/infraestrutura" element={<Infraestrutura />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/pertencimento" element={<Pertencimento />} />
        <Route path="/redefinir" element={<Redefinir />} />
        <Route path="/quemsomos" element={<quemSomos />} />
        <Route path="/acoessociais" element={<acoesSociais />} />
        <Route path="/minhasanalises" element={<minhasAnalises />} />
        <Route path="/moreinfo" element={<moreInfo />} />
        <Route path="/moreinfo2" element={<moreInfo2 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/inventory2" element={<Inventory2 />} />
        <Route path="/tree2" element={<Tree2 />} />
        <Route path="/impact2" element={<Impact2 />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
