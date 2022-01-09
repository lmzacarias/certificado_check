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
        <Route exact path="/" component={Certificate} />
        <Route exact path="/certificado-2" component={Certificate2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
