import 'antd/dist/antd.min.css';
import './App.css';
import Certificate from './components/Certificate';
import Certificate2 from './components/Certificate-1';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/certificado-61dd8b35d0e6srf883ba1b428" component={Certificate} />
        <Route exact path="/certificado-61dd8b35d0e62f883ba1b428" component={Certificate2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
