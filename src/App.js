import { BrowserRouter as BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
