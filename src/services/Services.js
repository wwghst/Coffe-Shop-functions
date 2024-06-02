import { useCallback } from 'react';

const useServices = () => {
  const getData = useCallback(async () => {
    const response = await fetch('https://66169b81ed6b8fa43480e96b.mockapi.io/carts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  }, []);

  const putData = useCallback((key, bodyKey, bodyValue) => {
    const bodyKeyVerified = bodyKey === 'inCart' ? 'inCart' : 'favorite';
    const requestBody = {
      [bodyKeyVerified]: bodyValue
    };

    return new Promise((resolve, reject) => {
      fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts/${key}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update favorite status');
          }
          resolve();
          return response;
        })
        .catch((error) => {
          console.error('Failed to update favorite status:', error);
          reject(error);
        });
    });
  }, []);

  return { getData, putData };
};

export default useServices;
