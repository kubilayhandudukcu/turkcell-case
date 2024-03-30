import { useState, useEffect } from 'react';
import { apiService } from '../Api/User';

const useFetchUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const usersData = await apiService.fetchUsers();
        setData(usersData);
        setError(null);
      } catch (err:any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { data, loading, error };
};

export default useFetchUsers;
