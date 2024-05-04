'use client'
import Link from 'next/link'
import { IconMain } from '../Icons'
import { useRouter } from 'next/navigation'
import { UserButton, useUser } from '@clerk/nextjs'
import '../../dashboard/dashboard.css'

export const Navbar = () => {
  const router = useRouter()
  const userData = useUser()

  return (
    <header>
      <nav className='mt-5 '>
        <ul className='flex items-center justify-center gap-80'>
          <div>
            <Link href='/' className='flex items-center text-xl text-green-300'>
              <span>
                <IconMain />
              </span>
              HelpService
            </Link>
          </div>
          <div className='flex gap-5 mr-[50px]'>
            <Link
              href={'/categorias'}
              className='transition-colors duration-200 link hover:text-green-500'
            >
              Servicios
            </Link>
            <Link
              href={'/new'}
              className='transition-colors duration-200 link hover:text-green-500'
            >
              Crear tu servicio
            </Link>
            <Link
              href={'/contactame'}
              className='transition-colors duration-200 link hover:text-green-500'
            >
              Contáctanos
            </Link>
          </div>

          <div>
            {userData.isSignedIn ? (
              <div className='flex items-center gap-1 '>
                <UserButton
                  appearance={{
                    elements: {
                      formButtonPrimary:
                        'bg-slate-500 hover:bg-slate-400 text-2xl w-8',
                    },
                  }}
                />
                <span>{userData.user.firstName}</span>
              </div>
            ) : (
              <button
                onClick={() => {
                  router.push('/sign-up')
                }}
                className='px-4 py-2 text-white transition duration-500 ease-in-out transform bg-black rounded hover:bg-green-700 hover:scale-95'
              >
                Acceder
              </button>
            )}
          </div>
        </ul>
      </nav>
    </header>
  )
}
