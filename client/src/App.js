import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import ProductPage from './components/productPage';
import Practice from './components/practice';
// Redux
import { Provider } from 'react-redux';
import store from './store';


import './App.css';

// const LandingComponent = React.lazy(() => import('./components/Landing'));
// const ProductPage = React.lazy(() => import('./components/productPage'));

// const LazyLandingComponent = React.lazy(() => import('./components/Landing'))
// const LazyProductPage= React.lazy(() => import('./components/productItem'))

const App = () => {
  

  return (
     <Provider store={store}>
      <Router>
        {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/product/:id" component={ProductPage} />
            <Route exact path="/test" component={Practice} />
        {/* </React.Suspense> */}
      </Router>
      </Provider> 
  );
};

export default App;
