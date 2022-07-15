import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import api from '../../common/api';
import { ROUTES } from '../../common/constants';

const Logout = () => {
  const { dispatch, getToken } = useContext(AppContext);
  const history = useHistory();

  const idToken = getToken();
  if (idToken) {
    api
      .post('v3/test/auth/logout', { idToken })
      .then((res) => {
        history.push(ROUTES.LOGIN);
      })
      .catch((error) => {});
  }
  return null;
};

export default Logout;
