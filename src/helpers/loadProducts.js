import { conn } from '../libs/mysql'
// import axios from 'axios'

export async function loadProducts() {
  // const { data } = await axios.get('http://localhost:3000/api/products')

  // esto es para cuando tenemos el back en el mismo proyecto
  const result = await conn.query('SELECT * FROM products')

  return result
}
