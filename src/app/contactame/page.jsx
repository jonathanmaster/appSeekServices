'use client'

import { Navbar } from '../components/home/Navbar'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
      <Navbar />
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
      <div className='px-6 py-10'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Contáctame
          </h2>
          <p className='mt-2 text-lg leading-8 '>
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
          </p>
        </div>
        <form action='#' method='POST' className='max-w-xl mx-auto mt-10'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='first-name'
                className='block text-sm font-semibold leading-6 '
              >
                Nombres
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  placeholder='HelpService'
                  className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last-name'
                className='block text-sm font-semibold leading-6 '
              >
                Apellidos
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  placeholder='HelpService'
                  className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold leading-6 '
              >
                Correo
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='helpservice@gmail.com'
                  className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold leading-6 '
              >
                Mensaje
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Comparte tus ideas y comentarios con nosotros'
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
              <div className='flex items-center h-6'>
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  <span className='sr-only'>Agree to policies</span>
                  <span
                    aria-hidden='true'
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className='text-sm leading-6 text-gray-300'>
                Al seleccionar esta opción, acepta nuestra
              </Switch.Label>
              <a
                target='_blank'
                href='https://www.mintic.gov.co/portal/inicio/Secciones-auxiliares/Politicas/2627:Politicas-de-Privacidad-y-Condiciones-de-Uso'
                className='font-semibold text-indigo-600'
              >
                política de privacidad.
              </a>
            </Switch.Group>
          </div>
          <div className='mt-10'>
            <button
              type='submit'
              className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Lets talk
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
