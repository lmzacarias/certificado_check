import 'antd/dist/antd.min.css';
import './App.css';
import CertificateInit from './components/Certificate-init';
import Certificate from './components/Certificate';
import Certificate1 from './components/Certificate-1';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
       
          path="/certificado-61dd8b35d0e6srf883dama1b451"
          // path="/certificado-61dd8b35d0e6srf883dama1b451"
          component={CertificateInit}
        />
        <Route
          exact
          path="/certificado-61dd8b35d0e6srf883dama1b452"
          component={Certificate}
        />
        <Route
          exact
          path="/certificado-61dd8b35d0e6srf883dama1b453"
          component={Certificate1}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
