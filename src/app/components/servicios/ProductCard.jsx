/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const ProductCard = ({ prod }) => {
  return (
    <Link
      href={`/dashboard/${prod.id}`}
      className='text-black transition duration-500 ease-in-out transform group hover:scale-105'
    >
      <div className='w-full h-full overflow-hidden bg-white rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7'>
        {prod.image && (
          <img
            src={prod.image}
            alt={prod.name}
            className='object-cover object-center w-full rounded-t-lg h-44'
          />
        )}
        <div className='p-2'>
          <p>
            <span className='font-bold'>Nombre:</span> {prod.newName}
          </p>
          <p>
            <span className='font-bold'>Descripción:</span>
            {prod.description}
          </p>
          <p>
            <span className='font-bold'>Dirección:</span> {prod.address}
          </p>
          <p>
            <span className='font-bold'>Servicio:</span> {prod.service}
          </p>
          <p>
            <span className='font-bold'>Categoría:</span> {prod.category}
          </p>
          <p>
            <span className='font-bold'>Celular:</span> {prod.phoneNumber}
          </p>
          <p>
            <span className='font-bold'>WhatsApp:</span> {prod.whatsapp_link}
          </p>
          <p>
            <span className='font-bold'>Facebook:</span> {prod.facebook_link}
          </p>
          <p>
            <span className='font-bold'>Instagram:</span> {prod.instagram_link}
          </p>
          <p>
            <span className='font-bold'>Años Experiencia:</span>
            {prod.experienceYears} años
          </p>
          <p>
            <span className='font-bold'>Días Servicio:</span>{' '}
            {prod.availableDays}
          </p>
          <p>
            <span className='font-bold'>Hora Servicio:</span>
            {prod.availableHours}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
