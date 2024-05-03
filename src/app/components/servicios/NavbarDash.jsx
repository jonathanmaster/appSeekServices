import Link from 'next/link'
import { IconMain } from '../Icons'
import '@/app/dashboard/dashboard.css'

const NavbarDash = () => {
  return (
    <nav className='fixed top-0 z-50 w-full py-3 mb-10 transition-all duration-500 ease-in-out bg-gradient-to-r from-black to-slate-950'>
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
            href={'/dashboard'}
            className='transition-colors duration-200 link hover:text-green-500'
          >
            Dashboard
          </Link>
          <Link
            href={'/new'}
            className='transition-colors duration-200  link hover:text-green-500'
          >
            Crear un servicio
          </Link>
          <li>Encuentra un servicio</li>
        </div>

        <div>
          <button className='px-4 py-2 text-white transition duration-500 ease-in-out transform bg-black rounded hover:bg-green-700 hover:scale-95'>
            Acceder
          </button>
        </div>
      </ul>
    </nav>
  )
}

export default NavbarDash
