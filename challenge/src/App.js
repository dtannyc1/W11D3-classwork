import {Switch, Route} from 'react-router-dom'
import Sample from './components/sample';
import Sensory from './components/sensory';
import {NavLink} from 'react-router-dom';

function App() {

  return (
    <>
    <h1>Hello from App</h1>
    <nav> 
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/sample'>Sample</NavLink>
      <NavLink to='/sensory'>Sensory</NavLink>
    </nav>
    <Switch>
      <Route path='/sample'>
        <Sample/>
      </Route>
      <Route path='/sensory'>
        <Sensory/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
