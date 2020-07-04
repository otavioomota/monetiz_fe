import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Transactions from '../pages/Transactions';

function Routes(){
  return(
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/transactions' component={Transactions} exact/>
    </Switch>
  )
}

export default Routes;