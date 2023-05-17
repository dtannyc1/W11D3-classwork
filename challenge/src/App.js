import {Switch, Route} from 'react-router-dom'
import Sample from './components/sample';
import Sensory from './components/sensory';
import {NavLink} from 'react-router-dom';
import logo from './_assets/logo.png'

function App() {

  return (
    <>
    <div className='top'>
    <img src={logo} alt='logo'/>
    <h1>Survey Tool</h1>
    </div>
    <nav> 
      <NavLink to='/'>Home</NavLink>
      <br/>
      <NavLink to='/sample'>Sample</NavLink>
      <br/>
      <NavLink to='/sensory'>Sensory</NavLink>
      <br/>
    </nav>
    <Switch>
      <Route exact path='/'> 
        <p>Block of text goes here! Block of text goes here! Block of text goes here!</p>
        <p>Block of text goes here! Block of text goes here! Block of text goes here!</p>
        <p>Block of text goes here! Block of text goes here! Block of text goes here!</p>
        <p>Block of text goes here! Block of text goes here! Block of text goes here!</p>
        <p>Block of text goes here! Block of text goes here! Block of text goes here!</p>
        <p>Block of text goes here! Block of text goes here! Block of text goes here!</p>
      </Route>
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
