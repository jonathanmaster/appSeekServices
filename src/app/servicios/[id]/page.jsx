import ButtonId from '@/app/components/servicios/ButtonId'
import { loadProductId } from '@/helpers/loadProductId'

const page = async ({ params }) => {
  const product = await loadProductId(params.id)

  return (
    <div className='flex items-center justify-center mt-8'>
      <div className=' p-6 overflow-hidden bg-white rounded-lg shadow-lg bg-opacity-10 w-[800px]'>
        <ul className='mb-8 text-2xl'>
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
    </div>
  )
}

export default page
