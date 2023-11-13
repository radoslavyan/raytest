import './App.css';
import Menu from './Menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import routes from './utils/Route-config';

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Switch>
          {routes.map(route =>
            <Route key={route.path} path={route.path} exact={route.exact} >
              <route.component />
            </Route>)}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;