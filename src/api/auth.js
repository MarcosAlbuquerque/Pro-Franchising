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

  const url = "https://prova.deploy.profranchising.com.br/auth/login"
  const response = await fetch(url, requestOptions)

  if (response.status === 200) {
    document.cookie = `token=${response.headers.get('Authorization').split(' ')[1]}`
  }

  const result = await response.json()
  console.log(result)
  return result
}

export default Auth