import { Routes, Route } from "react-router-dom"

import About from 'components/About/About';
import Login from 'components/Login/Login';
import RegisterOrganizationOwner from 'components/RegisterOrganizationOwner/RegisterOrganizationOwner';
import Dashboard from 'components/Dashboard/Dashboard';
import Purchases from 'components/Purchases/Purchases';

import withNavbar from 'components/hoc/withNavbar';

import './App.css';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-organization-owner" element={<RegisterOrganizationOwner />} />

        <Route path="/dashboard" element={withNavbar(Dashboard)} />
        <Route path="/purchases" element={withNavbar(Purchases)} />


        <Route path="/.well-known/first-party-set" element={JSON.stringify("test")} />
      </Routes>
    </div>
  );
}

export default App;
