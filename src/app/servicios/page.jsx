import { loadProducts } from '@/helpers/loadProducts'
import ProductCard from '../components/servicios/ProductCard'

const ServicesPage = async () => {
  const products = await loadProducts()

  return (
    <div className='grid grid-cols-1 gap-5 m-5 lg:grid-cols-4 sm:grid-cols-3 2xl:grid-cols-6'>
      {products.map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default ServicesPage
