import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className=' bg-white font-Raleway px-6 fixed flex justify-center md:grid grid-cols-3 z-50 shadow-md w-full py-4'>
            <div className="mx-6 inline">
                <a href='/'><span className="uppercase inline">logo</span></a>
            </div>
            <div className="w-90 col-span-2 hidden md:flex justify-end">
                
                <Link className='px-6 hover:text-orange-500' href='/'>
                    Home
                </Link>
                <Link className='px-6 hover:text-orange-500' href='/about'>
                    About
                </Link>
                
                <input type="text" className='border-2 border-orange-500 outline-none rounded-md px-4 mx-6' placeholder='search jobs, skills, recruiter...' />
                <Link className='px-6 hover:text-orange-500' href='/'>
                    Categories
                </Link>
                <Link className='px-6 hover:text-orange-500' href='/'>
                    Contact
                </Link>
            </div>
            
        </nav>
    )
  }