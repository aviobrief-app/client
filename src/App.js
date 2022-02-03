import { Routes, Route } from "react-router-dom"

import RegisterOrganizationOwner from 'components/RegisterOrganizationOwner/RegisterOrganizationOwner';
import Login from 'components/Login/Login';
import Dashboard from 'components/Dashboard/Dashboard';

import withNavbar from 'components/hoc/withNavbar';

import './App.css';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/register-organization-owner" element={<RegisterOrganizationOwner />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={withNavbar(Dashboard)} />


        <Route path="/.well-known/first-party-set" element={JSON.stringify("test")} />
      </Routes>
    </div>
  );
}

export default App;
