import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { PurchaseContextProvider } from 'contexts/PurchaseContext';

/* NOT AUTHENTICATED PAGES -> no logged in users, no data contexts */
import About from 'components/About/About';
import Login from 'components/Login/Login';
import RegisterOrganizationOwner from 'components/RegisterOrganizationOwner/RegisterOrganizationOwner';

/* PROFILE PAGES -> logged in (authenticated) users with data contexts */
import ProfilePage from 'components/router/ProfilePage/ProfilePage';
import Dashboard from 'components/Dashboard/Dashboard';
import Purchases from 'components/Purchases/Purchases';

/* HOC */
import withNavbar from 'components/hoc/withNavbar';

import './App.css';
function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-organization-owner" element={<RegisterOrganizationOwner />} />

        <Route path="/profile" element={withNavbar(ProfilePage)}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="purchases" element={<Purchases />} />
        </Route>
      </Routes>

      {/* <Route path="/.well-known/first-party-set" element={JSON.stringify("test")} /> */}
    </div>

  );
}

export default App;
