import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Homemain from './Components/HomeMain/Homemain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Homemain></Homemain>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Homemain></Homemain>
            </Route>
            <PrivateRoute path="/service/:serviceKey">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
