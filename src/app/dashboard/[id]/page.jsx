/* eslint-disable @next/next/no-img-element */
// import ButtonId from '../app/components/servicios/ButtonId'
import ButtonId from '../../components/servicios/ButtonId'
import NavbarDash from '../../components/servicios/NavbarDash'
import { loadProductId } from '../../../helpers/loadProductId'

const page = async ({ params }) => {
  const product = await loadProductId(params.id)

  return (
    <section>
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
      <div className='flex items-center  mx-auto mt-[80px] mb-2 bg-gray-200 bg-opacity-30 w-[1100px] h-[500px] '>
        <div className='text-xs pt-14 px-2 overflow-hidden text-black rounded-lg shadow-lg bg-opacity-10 w-[1000px] '>
          <ul className='text-2xl mb-14'>
            <li>
              <span className='font-bold'>Nombre: </span>
              {product.newName}
            </li>

            <li>
              <span className='font-bold'>Descripción: </span>
              {product.description}
            </li>
            <li>
              <span className='font-bold'>Dirección: </span>
              {product.address}
            </li>
            <li>
              <span className='font-bold'>Servicio: </span>
              {product.service}
            </li>
            <li>
              <span className='font-bold'>Categoría: </span>
              {product.category}
            </li>
            <li>
              <span className='font-bold'>Celular: </span>
              {product.phoneNumber}
            </li>
            <li>
              <span className='font-bold'>WhatsApp: </span>
              {product.whatsapp_link}
            </li>
            <li>
              <span className='font-bold'>Facebook: </span>
              {product.facebook_link}
            </li>
            <li>
              <span className='font-bold'>Instagram: </span>
              {product.instagram_link}
            </li>
            <li>
              <span className='font-bold'>Experiencia: </span>
              {product.experienceYears} años
            </li>
            <li>
              <span className='font-bold'>Días abierto: </span>
              {product.availableDays}
            </li>
            <li>
              <span className='font-bold'>Horas abierto: </span>
              {product.availableHours}
            </li>
          </ul>

          <ButtonId productId={product.id} />
        </div>
        <div className='w-[500px] p-2'>
          <img
            src={product.image}
            alt={product.newName}
            className='object-cover object-center w-[369px] h-[384]'
          />
        </div>
      </div>
    </section>
  )
}

export default page
