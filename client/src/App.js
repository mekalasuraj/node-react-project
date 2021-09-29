import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//import Landing from './components/Landing';
import './App.css';
import ProtectedRoute from './privateRoutes';

 const LazyLandingComponent = React.lazy(() => import('./components/Landing'));
 const LazyRegisterComponent = React.lazy(() => import('./components/students/register'));
 const LazyLoginComponent = React.lazy(() => import('./components/students/login'));
 const LazyDashboardComponent = React.lazy(() => import('./components/students/dashboard'));

const App = () => {
  


  return (
     
      <Router>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={LazyLandingComponent} />
            <Route exact path="/register" component={LazyRegisterComponent} />
            <Route exact path="/login" component={LazyLoginComponent} />
            {/* <Route exact path="/dashboard" component={LazyDashboardComponent} /> */}
            <ProtectedRoute exact path="/dashboard" ><LazyDashboardComponent/></ProtectedRoute>
        </React.Suspense>
      </Router>
     
  );
};

export default App;
