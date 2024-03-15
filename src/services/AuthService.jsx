const API_URL = 'http://localhost:3001';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
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
    localStorage.setItem('authToken', data.acessToken);
    localStorage.setItem('id', data.id);
    // Armazenar outras informações de autenticação, como ID do usuário, tipo de usuário, etc.
    return data;
  } else {
    throw new Error('Login failed');
  }
};