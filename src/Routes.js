import * as Sentry from '@sentry/react';
import { Card } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Router, Switch } from 'react-router-dom';
import { get } from 'lodash';
import App from './app/App';
import { AppContext } from './AppContext';
import { ErrorIcon } from './assets/svg';
import './assets/vendors/style';
import api from './common/api';
import { ROUTES } from './common/constants';
import history from './historyData';
import ChangePassword from './modules/auth/ChangePassword';
import Login from './modules/auth/Login';
import Logout from './modules/auth/Logout';
import ResetPassword from './modules/auth/ResetPassword';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  const { getToken, getRefreshToken, initializeAuth } = useContext(AppContext);
  const path = history?.location?.pathname;
  const refreshToken = getRefreshToken();
  const token = getToken();
  function successCallback(accessToken, authRefreshToken) {
    initializeAuth(accessToken, authRefreshToken);
  }
  const refreshTokenCall = () => {
    api
      ?.post('mobilo-dev-1f409/us-central1/v3/test/auth/refresh-token', {
        refreshToken:
          'AOEOulZkp7N4td1ExlDExyL_bx-F35Zpoi_CTOkiGgglGHCw6NNo5mcxFoJbwrv85xpBLVuY-eHbUUvdkppEDgOacFxCPHzmvhxBGgql8AMdIU6KpNmbHgaaTR-BodW6_mQlrthjqyEE4qj8VzdjM-8PsdtTa6a-QOtHDIJhexC5KB6-t5Vdd022MKYhjbOrQ9DrkfmejPxOCsBi76JbVGO0Gvn4xkmhlg'
      })
      .then((res) => {
        const accessToken = get(res, 'data.idToken');
        const authRefreshToken = get(res, 'data.refreshToken');
        successCallback(accessToken, authRefreshToken);
        history.goBack();
      })
      .catch();
    // eslint-disable-next-line no-console
  };
  useEffect(() => {
    if (token && refreshToken) {
      refreshTokenCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (path === ROUTES.LOGOUT || token) {
      // get user details
    }
    // Below line is disabling Eslint auto fix we don't want any value in use effect array
    // We want to call initializeAuth once. Please add this line while you working with hooks and you want to call it once.
    // eslint-disable-next-line
  }, []);

  const MyFallbackComponent = ({ error, componentStack }) => (
    <div className="d-flex flex-vertical align-center">
      <div className="d-flex flex-vertical align-center">
        <ErrorIcon className="mt-10" width="65px" height="90px" />
        <p className="font-xx-large">
          <strong>Oops! An error occurred!</strong>
        </p>
        <Card className="width-percent-60">
          <p className="d-flex font-18">
            <strong className="font-large mr-5">Error: </strong>
            <p className="line-24"> {error?.message?.toString()}</p>
          </p>
          <p>
            <strong className="font-large">Stacktrace:</strong>
            <p className="line-24">{componentStack}</p>
          </p>
        </Card>
      </div>
    </div>
  );

  return (
    <Sentry.ErrorBoundary fallback={MyFallbackComponent}>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path={ROUTES.RESET} component={ResetPassword} />
          <PublicRoute exact path={ROUTES.LOGIN} component={Login} />
          <PublicRoute exact path={ROUTES.CHANGE} component={ChangePassword} />
          <PrivateRoute exact path={ROUTES.LOGOUT} component={Logout} />
          <PrivateRoute path="/" component={App} />
        </Switch>
      </Router>
    </Sentry.ErrorBoundary>
  );
};
export default Routes;
