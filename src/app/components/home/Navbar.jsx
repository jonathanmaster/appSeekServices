import Link from 'next/link'
import { IconMain } from '../Icons'

export const Navbar = () => {
  return (
    <header>
      <nav className='mt-5 '>
        <ul className='flex items-center justify-center gap-80'>
          <div>
            <Link href='/' className='flex items-center text-xl text-green-300'>
              <span>
                <IconMain />
              </span>
              SeekService
            </Link>
          </div>
          <div className='flex gap-5 mr-[50px]'>
            <li>Servicios</li>
            <li>Crear tu servicio</li>
            <li>Contáctanos</li>
          </div>

          <div>
            <button className='px-4 py-2 text-white transition duration-500 ease-in-out transform bg-black rounded hover:bg-green-700 hover:scale-95'>
              Acceder
            </button>
          </div>
        </ul>
      </nav>
    </header>
  )
}
