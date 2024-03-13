const API_URL = 'http://localhost:3001';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/trainer_profile/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    return data;
  } else {
    throw new Error('Login failed');
  }
};
