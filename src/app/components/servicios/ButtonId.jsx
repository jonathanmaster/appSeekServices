'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'

const ButtonId = ({ productId }) => {
  const router = useRouter()

  return (
    <div className='flex gap-5 text-white'>
      <button
        className='block w-full px-6 py-3 text-xl font-medium text-center transition duration-500 ease-in-out transform rounded-md bg-green-950 hover:scale-95'
        onClick={() => {
          router.push(`/dashboard/edit/${productId}`)
        }}
      >
        Editar
      </button>
      <button
        onClick={async () => {
          if (confirm('Esta seguro de eliminar este servicio?')) {
            const result = await axios.delete(`/api/products/${productId}`)
            if (result.status === 200) {
              router.push('/dashboard')
              router.refresh()
            }
          }
        }}
        className='block w-full px-6 py-3 text-xl font-medium text-center transition duration-500 ease-in-out transform bg-black rounded-md hover:scale-95 '
      >
        Borrar
      </button>
    </div>
  )
}

export default ButtonId
