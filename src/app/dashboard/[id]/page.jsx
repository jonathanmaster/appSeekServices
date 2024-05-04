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
      <div className='flex items-center  mx-auto mt-[80px] mb-2 bg-[#bebe56] w-[1100px] h-[500px] '>
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
