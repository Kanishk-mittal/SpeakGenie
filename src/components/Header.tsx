import Branding from './HeaderComponents/Branding'
import Navbar from './HeaderComponents/Navbar'

const Header = () => {
  return (
    <header className='p-4 flex justify-between w-[81%] mx-auto align-middle'>
      <Branding />
      <Navbar />
    </header>
  )
}

export default Header
