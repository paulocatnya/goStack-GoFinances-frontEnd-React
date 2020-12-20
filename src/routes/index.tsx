// import React from 'react';
// import {Switch, Route} from 'react-router-dom';

// import SignIn from '../pages/SignIn';
// import SignUp from './pages/SignUp';

// const Routes: React.FC = () => (
//   <Switch>
//     <Route path="/" exact component={SignIn}/>
//     <Route path="/signup"component={SignUp}/>
//   </Switch>
// )


// export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../../src/pages/SignIn/Index';
import SignUp from '../../src/pages/SignUp/Index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
