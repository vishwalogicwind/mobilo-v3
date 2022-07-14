import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';

const Logout = () => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  // logout action here

  return null;
};

export default Logout;
