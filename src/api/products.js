//script gerado do Postman
const baseUrl = "https://prova.deploy.profranchising.com.br"

async function getProducts(page = 1, size = 5) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${document.cookie.split(';')[1].slice(7)}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`${baseUrl}/product/list`, requestOptions)
    const result = await response.json()

    return result
  } catch (e) {
    console.log(e.message)
  }
}

async function createProduct(nameProduct, imageProduct, priceProduct, ingredients = []) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${document.cookie.split(';')[1].slice(7)}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(
        {
          "image": imageProduct,
          "ingredients": ingredients,
          "name": nameProduct,
          "price": priceProduct
        }
      ),
      redirect: 'follow'
    };

    const response = await fetch(`${baseUrl}/product/save`, requestOptions)

    if (response.status === 400) {
      const resultJSON = await response.json()
      return resultJSON

    } else if (response.status === 200) {
      document.getElementById('statusCadastro').innerText = 'Receita criada com sucesso'
      return response
    }

  } catch (e) {
    console.log(e.message)
  }

}

const API = {
  getProducts,
  createProduct
}

export default API
