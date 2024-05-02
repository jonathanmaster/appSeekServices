import Link from 'next/link'

const ProductCard = ({ prod }) => {
  return (
    <Link
      href={`/servicios/${prod.id}`}
      className='p-3 text-black bg-white hover:bg-gray-200'
    >
      {prod.image && (
        <img src={prod.image} alt={prod.name} className='w-full' />
      )}
      <h1>Nombre: {prod.newName}</h1>
      <p>Descripción: {prod.description}</p>
      <p>Dirección: {prod.address}</p>
      <p>Servicio: {prod.services}</p>
      <p>Categoría: {prod.category}</p>
      <p>Celular: {prod.phoneNumber}</p>
      <p>WhatsApp: {prod.whatsapp_link}</p>
      <p>Facebook: {prod.facebook_link}</p>
      <p>Instagram: {prod.instagram_link}</p>
      <p>Años Experiencia: {prod.experienceYears} años</p>
      <p>Días Servicio: {prod.availableDays}</p>
      <p>Hora Servicio: {prod.availableHours}</p>
    </Link>
  )
}

export default ProductCard
