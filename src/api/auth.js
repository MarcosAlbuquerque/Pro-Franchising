
async function Auth(username, password) {
  const raw = JSON.stringify({
    "password": username || process.env.REACT_APP_USERNAME,
    "username": password || process.env.REACT_APP_PASSWORD
  });

  const requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: raw,
    redirect: 'follow'
  };

  try {
    const url = "https://prova.deploy.profranchising.com.br/auth/login"
    const response = await fetch(url, requestOptions)
    const authorization = response.headers.has('Authorization')

    if (authorization) {
      const tokenAPI = response.headers.get('Authorization').split(' ')[1]
      const resultJSON = response.json()
      const data = await resultJSON

      document.cookie = `user=${data.name}`
      document.cookie = `token=${tokenAPI}`
      return tokenAPI
    } else {
      const result = await response.json()

      throw new Error(result.message)
    }

  } catch (e) {
    document.getElementById('invalidMessage').innerText = e.message
  }
}
export default Auth