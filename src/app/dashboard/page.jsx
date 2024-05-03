import { loadProducts } from '@/helpers/loadProducts'
import ProductCard from '../components/servicios/ProductCard'
import NavbarDash from '../components/servicios/NavbarDash'

const ServicesPage = async () => {
  const products = await loadProducts()

  return (
    <article>
      <NavbarDash />
      <section className='mt-[80px]'>
        <h1 className='ml-4 text-5xl'>Dashboard</h1>
        <div className='grid grid-cols-1 p-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-5'>
          {products.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>
      </section>
    </article>
  )
}

export default ServicesPage
