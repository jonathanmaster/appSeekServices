// import { loadProducts } from '../../helpers/loadProducts'
import ProductCard from '../components/servicios/ProductCard'
import NavbarDash from '../components/servicios/NavbarDash'
import { conn } from '../../libs/mysql'

async function loadProducts() {
  const products = await conn.query('SELECT * FROM product')
  return products
}

const ServicesPage = async () => {
  const products = await loadProducts()

  return (
    <article>
      <NavbarDash />
      <div
        className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
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
