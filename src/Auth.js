export const baseUrl = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'password': password,
      'email': email
    })
  })
    .then(response => {
      try {
        if (response.ok) {
          return response.json();
        }
      } catch (err) {
        return (err);
      }
    })
    .then(res => res)
    .catch(err => console.log(err));
}

export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'password': password,
      'email': email
    })
  })
    .then(response => {
      try {
        if (response.ok) {
          return response.json();
        }
      } catch (err) {
        return (err);
      }
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('jwt', data.token)
        return data;
      }
    })
    .catch(err => console.log(err));
}

export const getContent = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => {
      try {
        if (response.ok) {
          return response.json();
        }
      } catch (err) {
        return (err);
      }
    })
    .then(res => JSON.stringify(res))
    .then(res => JSON.parse(res))
    .catch(err => console.log(err));
}
