//script gerado do Postman
const baseUrl = "https://prova.deploy.profranchising.com.br"
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${document.cookie.slice(6)}`);
myHeaders.append("Content-Type", "application/json");

async function getProducts(page = 1, size = 5) {
  try {
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`${baseUrl}/product/list`, requestOptions)
    const result = await response.json()

    return result
  } catch (e) {
    document.getElementById('invalidMessage').innerText = e.message
  }
}

async function createProduct(nameProduct, imageProduct, ingredients = []) {
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(
      {
        "image": imageProduct,
        "ingredients": [
          {
            "cost": 0,
            "name": "string",
            "quantity": 0
          }
        ],
        "name": nameProduct,
        "price": 0
      }
    ),
    redirect: 'follow'
  };
  const response = await fetch(`${baseUrl}/product/save`, requestOptions)
  const result = await response.json()
  console.log(result)
}

const API = {
  getProducts,
  createProduct
}

export default API
