import axios from 'axios'

export async function loadProductId(productId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  )

  return data
}
