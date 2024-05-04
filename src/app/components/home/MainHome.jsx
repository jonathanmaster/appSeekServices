'use client'

import { useInputDinamic } from '../../hooks/inputDinamico'
import { Loupe } from '../Icons'

export const MainHome = () => {
  const { palabras, indiceLetra, indicePalabra } = useInputDinamic()

  return (
    <section>
      <div className='text-center mt-36'>
        <h1 className='text-6xl font-medium'>Busca Tu Servicio </h1>
        <span className='text-6xl font-medium text-green-300'>
          {' '}
          simplifica tu vida
        </span>
      </div>
      <div className='w-[800px] text-center mx-auto'>
        <p className='mt-10 text-xl font-medium text-gray-300'>
          Es tan sencillo como parece. Los clientes te descubren, se ponen en
          contacto contigo, realizas la venta. Todo está a un solo clic de
          distancia.
        </p>
      </div>
      <form className='mx-auto mt-10 w-96'>
        <div className='relative'>
          <input
            id='inputHome'
            type='text'
            placeholder={palabras[indicePalabra].slice(0, indiceLetra)}
            className='w-full p-3 pl-10 bg-black border border-green-700 rounded-lg '
          />
          <span className='absolute transform -translate-y-1/2 left-3 top-1/2'>
            <Loupe />
          </span>
        </div>
      </form>
    </section>
  )
}
