
import './App.scss';
import { Switch, Route } from "react-router-dom";
import Login from './components/LogIn/Login'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component= {Login}/>

      </Switch>
    </div>
  );
}

export default App;
