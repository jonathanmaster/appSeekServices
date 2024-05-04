import { conn } from '../../../libs/mysql'
import { Navbar } from '../../components/home/Navbar'
import DataCategory from '../DataCategory'

async function loadProducts() {
  const products = await conn.query('SELECT * FROM product')
  return products
}

const Page = async ({ params }) => {
  const data = await loadProducts()

  // Convertir los datos a objetos JavaScript planos
  const plainData = JSON.parse(JSON.stringify(data))

  // Filtrar los productos que tienen la misma categoría que params.categoryId
  const filteredData = plainData.filter(
    (product) => product.category === params.categoryId
  )

  return (
    <>
      <Navbar />
      <DataCategory filteredData={filteredData} />
    </>
  )
}

export default Page
