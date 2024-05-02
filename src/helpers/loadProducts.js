// import { conn } from '@/libs/mysql'
import axios from 'axios'

export async function loadProducts() {
  // const result = await conn.query('SELECT * FROM products') esto es para cuando tenemos el back en el mismo proyecto
  const { data } = await axios.get('http://localhost:3000/api/products')
  return data
}
