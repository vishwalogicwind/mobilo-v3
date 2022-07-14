import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../common/constants';
import Error404 from '../Error404';
import OrganizationWrapper from '../modules/organization';

const ContentRoutes = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.MAIN} component={OrganizationWrapper} />
        <Route path="*" exact component={Error404} />
      </Switch>
    </>
  );
};

export default ContentRoutes;
