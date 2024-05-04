// import axios from 'axios'
import { conn } from '../libs/mysql'

export async function loadProductId(productId) {
  // const { data } = await axios.get(
  //   `http://localhost:3000/api/products/${productId}`
  // )

  // return data

  const [data] = await conn.query('SELECT * FROM product WHERE id = ?', [
    productId,
  ])
  return data
}
