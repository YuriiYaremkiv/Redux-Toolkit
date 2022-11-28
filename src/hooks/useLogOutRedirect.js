import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIN = useSelector(state => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIN) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIN, navigate]);
};
