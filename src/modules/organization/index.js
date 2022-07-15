import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../common/constants';
import Organization from './Organization';

function OrganizationWrapper() {
  return (
    <Switch>
      <Route path={ROUTES.MAIN} component={Organization} />
    </Switch>
  );
}

export default OrganizationWrapper;
