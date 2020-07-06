import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Transactions from '../pages/Transactions';

function Routes(){
  return(
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/transactions' component={Transactions} />
    </Switch>
  )
}

export default Routes;