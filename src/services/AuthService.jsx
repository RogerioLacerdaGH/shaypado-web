const API_URL = 'http://localhost:3001';

export const login = async (email, password) => {
  try {
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
      localStorage.setItem('authToken', data.accessToken);
      localStorage.setItem('id', data.id);
      // Armazenar outras informações de autenticação, como ID do usuário, tipo de usuário, etc.
      return response; // Retorna a resposta da requisição
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    throw new Error('Login failed');
  }
};