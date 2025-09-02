import ButtonVoilet from "../ButtonVoilet"
import type { NavItem } from '../../types/NavItem'

const Navbar = () => {
    const navItems: NavItem[] = [
        { title: 'Why' },
        { title: 'Programs' },
        { title: 'Features' },
        { title: 'For Parents' },
        { title: 'FAQ' }
    ]

    const handleButtonClick = () => {
        console.log("Button clicked")
    }

    const handleButtonHover = () => {
        console.log("Button hovered")
    }

    return (
        <div className='text-[#7c3bec] font-bold flex justify-center items-center'>
            {navItems.map(item => (
                <a key={item.title} href={item.url ?? '#'} className='mx-2'>{item.title}</a>
            ))}
            <ButtonVoilet label="Start Free" onClick={handleButtonClick} onHover={handleButtonHover} />
        </div>
    )
}

export default Navbar
