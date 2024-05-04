/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const DataCategory = ({ filteredData }) => {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleClick = useCallback((product) => {
    setSelectedProduct(product)
    setOpen(true)
  }, [])

  return (
    <div className='grid grid-cols-3 gap-4 mt-10'>
      {filteredData.map((product) => (
        <div key={product.id}>
          <div
            className='relative cursor-pointer group'
            onClick={() => handleClick(product)}
          >
            <img
              src={product.image}
              alt={product.newName}
              className='object-cover w-full h-full rounded-lg'
            />
            <div className='absolute bottom-0 left-0 right-0 p-2 text-center text-white bg-black bg-opacity-50 text-bold'>
              {product.newName}
            </div>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <Transition show={open} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-10 overflow-hidden w-[1000px] h-[550px] bg-black m-auto rounded-2xl'
            onClose={() => setOpen(false)}
          >
            <div className='flex items-center mx-auto w-[1100px]  '>
              <div className='text-xs pt-10 pl-2 overflow-hidden rounded-lg shadow-lg bg-opacity-10 w-[1000px] h-full'>
                <ul className='text-2xl mb-14'>
                  <li>
                    <span className='font-bold'>Nombre: </span>
                    {selectedProduct.newName}
                  </li>

                  <li>
                    <span className='font-bold'>Descripción: </span>
                    {selectedProduct.description}
                  </li>
                  <li>
                    <span className='font-bold'>Dirección: </span>
                    {selectedProduct.address}
                  </li>
                  <li>
                    <span className='font-bold'>Servicio: </span>
                    {selectedProduct.service}
                  </li>
                  <li>
                    <span className='font-bold'>Categoría: </span>
                    {selectedProduct.category}
                  </li>
                  <li>
                    <span className='font-bold'>Celular: </span>
                    {selectedProduct.phoneNumber}
                  </li>
                  <li>
                    <span className='font-bold'>WhatsApp: </span>
                    {selectedProduct.whatsapp_link}
                  </li>
                  <li>
                    <span className='font-bold'>Facebook: </span>
                    {selectedProduct.facebook_link}
                  </li>
                  <li>
                    <span className='font-bold'>Instagram: </span>
                    {selectedProduct.instagram_link}
                  </li>
                  <li>
                    <span className='font-bold'>Experiencia: </span>
                    {selectedProduct.experienceYears} años
                  </li>
                  <li>
                    <span className='font-bold'>Días abierto: </span>
                    {selectedProduct.availableDays}
                  </li>
                  <li>
                    <span className='font-bold'>Horas abierto: </span>
                    {selectedProduct.availableHours}
                  </li>
                </ul>
              </div>
              <div className='w-[800px] p-2'>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.newName}
                  className='object-cover object-center w-[369px] h-[384]'
                />
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  )
}

export default DataCategory
