import Link from 'next/link'
import Image from 'next/image'
import  CustomButton  from './CustomButton'
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                src="/logo.png" 
                alt='logo DBM motos' 
                width={118}
                height={25}
                className='object-contain' 
                />
            </Link>
            <CustomButton
            title= "Contacto"
            containerStyles="bg-primary-blue text-white rounded-full min-w-[130px]"
            handLeClick={()=> {}}
            
            />
        </nav>
    </header>
  )
}

export default Navbar