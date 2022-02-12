import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';


import About from 'components/About/About';
import Login from 'components/Login/Login';
import RegisterOrganizationOwner from 'components/RegisterOrganizationOwner/RegisterOrganizationOwner';
import Dashboard from 'components/Dashboard/Dashboard';
import Purchases from 'components/Purchases/Purchases';

import withNavbar from 'components/hoc/withNavbar';

import './App.css';
function App() {

  const theme = createTheme({
    typography: {
      // palette: {
      //   primary: {
      //     light: "#9a2fae",
      //     main: "#9a2fae",
      //     dark: "#9a2fae",

      //   },
      //   secondary: {
      //     main: "#9a2fae"
      //   },
      //   info: {
      //     light: "#9a2fae",
      //     main: "#9a2fae",
      //     dark: "#9a2fae",
      //   }
      // },
      fontFamily: [
        'Roboto',
        'sans-serif'
      ].join(','),
    }
  });

  return (
    <ThemeProvider theme={theme}>

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
    </ThemeProvider>

  );
}

export default App;
