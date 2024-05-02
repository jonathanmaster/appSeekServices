'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'

const ProductForm = () => {
  const [product, setProduct] = useState({})
  const [file, setFile] = useState(null)
  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/products/${params.id}`).then((res) => {
        setProduct(res.data)
      })
    }
  }, [params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!params.id) {
      const formData = new FormData()
      formData.append('newName', product.newName)
      formData.append('description', product.description)
      formData.append('address', product.address)
      formData.append('service', product.service)
      formData.append('category', product.category)
      formData.append('phoneNumber', product.phoneNumber)
      formData.append('whatsapp_link', product.whatsapp_link)
      formData.append('facebook_link', product.facebook_link)
      formData.append('instagram_link', product.instagram_link)
      formData.append('experienceYears', product.experienceYears)
      formData.append('availableDays', product.availableDays)
      formData.append('availableHours', product.availableHours)

      if (file) {
        formData.append('image', file)
      }

      await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } else {
      console.log(product)
      const res = await axios.put(`/api/products/${params.id}`, product)
      console.log(res)
    }

    form.current.reset()
    router.push('/servicios')
    router.refresh()
  }

  return (
    <form className='w-full' onSubmit={handleSubmit} ref={form}>
      <h1 className='mt-2 text-5xl text-center'>Registre su Servicio</h1>
      <section className='flex justify-center w-full gap-10 p-10 '>
        <div className='w-[500px]'>
          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='newName'
          >
            Nombre del Servicio
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='newName'
            onChange={handleChange}
            value={product.newName}
            autoFocus
            placeholder='Nombre del servicio'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='description'
          >
            Descripción del servicio
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='description'
            onChange={handleChange}
            value={product.description}
            placeholder='Mi servicio esta conformado...'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='address'
          >
            Dirección del servicio
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='address'
            onChange={handleChange}
            value={product.address}
            placeholder='calle 9 #12-56'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='service'
          >
            Que servicio presta
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='service'
            onChange={handleChange}
            value={product.service}
            placeholder='Mi servicio es de medio tiempo...'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='category'
          >
            Categoría
          </label>
          <select
            className='w-full px-4 py-3 pr-8 mb-3 leading-tight bg-black border border-black rounded appearance-none focus:outline-none focus:bg-white focus:text-black focus:border-gray-500'
            name='category'
            onChange={handleChange}
            value={product.category}
          >
            <option value='electrodomesticos'>Electrodomésticos</option>
            <option value='hogar'>Hogar</option>
            <option value='decoraciones'>Decoraciones y Arreglos</option>
            <option value='sastre'>Sastre y Calzado</option>
            <option value='talleres'>Taller Mecánico</option>
            <option value='otros'>Otros...</option>
          </select>

          <label
            className='text-lg font-medium tracking-wide '
            htmlFor='phoneNumber'
          >
            Número de Contacto
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='phoneNumber'
            onChange={handleChange}
            value={product.phoneNumber}
            placeholder='3123456789'
          />
        </div>

        <div className='w-[500px]'>
          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='whatsapp_link'
          >
            Añada un link de WhastApp
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='whatsapp_link'
            onChange={handleChange}
            value={product.whatsapp_link}
            placeholder='https://whatsapp/nadie'
          />
          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='facebook_link'
          >
            Añada un link de Facebook
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='facebook_link'
            onChange={handleChange}
            value={product.facebook_link}
            placeholder='https://facebook/nadie'
          />
          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='instagram_link'
          >
            Añada un link de Instagram
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='instagram_link'
            onChange={handleChange}
            value={product.instagram_link}
            placeholder='https://instagram/nadie'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='experienceYears'
          >
            Ingrese los años de experiencia
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='number'
            name='experienceYears'
            onChange={handleChange}
            value={product.experienceYears}
            placeholder='10'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='availableDays'
          >
            Ingrese el horario de atención
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='availableDays'
            onChange={handleChange}
            value={product.availableDays}
            placeholder='lunes a viernes'
          />

          <label
            className='mb-2 text-lg font-medium tracking-wide '
            htmlFor='availableDays'
          >
            Ingrese las horas de atención
          </label>
          <input
            className='w-full px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            type='text'
            name='availableHours'
            onChange={handleChange}
            value={product.availableHours}
            placeholder='7am - 5pm'
          />
        </div>
      </section>

      <section className='flex items-center mx-auto w-[800px] gap-10 mb-5'>
        <div className='flex flex-col items-center justify-center'>
          <label
            htmlFor='productImage'
            className='mb-2 text-lg font-medium tracking-wide '
          >
            Imagen del servicio
          </label>
          <input
            type='file'
            className='px-4 py-3 mb-3 leading-tight border rounded appearance-none bg-zinc-950 focus:outline-none focus:bg-white focus:text-black'
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
        </div>
        <div>
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={500}
              height={500}
            />
          )}
        </div>
      </section>

      <div className='flex justify-center w-full mb-5'>
        <button className='px-6 py-3 font-medium text-center text-white transition duration-500 ease-in-out transform rounded-md bg-gradient-to-r from-green-600 to-black hover:scale-95'>
          Enviar
        </button>
      </div>
    </form>
  )
}

export default ProductForm
