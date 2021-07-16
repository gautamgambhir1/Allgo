
import Signin from './Screens/Signin';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Screens/Home';
import Analytics from './Screens/Analytics';
import Navbars from './Screens/Navbar';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path = '/' component = {Signin}/>
      <Route exact path = '/home' component = {Home}/>
      <Route exact path = '/analytics' component = {Analytics}/>
      <Route exact path = '/nav' component = {Navbars}/>


      </BrowserRouter>
    </div>
  );
}

export default App;
