import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import api from '../../common/api';
import { ROUTES } from '../../common/constants';

const Logout = () => {
  const { getToken } = useContext(AppContext);
  const history = useHistory();

  const idToken = getToken();
  if (idToken) {
    api
      .post('v3/test/auth/logout', { idToken })
      .then(() => {
        history.push(ROUTES.LOGIN);
      })
      .catch(() => {});
  }
  return null;
};

export default Logout;
