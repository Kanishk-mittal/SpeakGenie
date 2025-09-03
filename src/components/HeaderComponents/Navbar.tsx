import { useEffect, useState } from "react"
import ButtonVoilet from "../ButtonVoilet"
import type { NavItem } from '../../types/NavItem'
import { usePopup } from '../../contexts/PopupContext'

const Navbar = () => {
    const { openPopup } = usePopup()
    const navItems: NavItem[] = [
        { title: 'Why' },
        { title: 'Programs' },
        { title: 'Features' },
        { title: 'For Parents' },
        { title: 'FAQ' }
    ]

    const [open, setOpen] = useState(false)

    const handleButtonClick = () => {
        openPopup()
    }

    const handleButtonHover = () => {
        console.log("Button hovered")
    }

    // close mobile menu on Escape or when window is resized above md
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
        const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
        window.addEventListener('keydown', onKey)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('keydown', onKey)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <nav className='text-[#7c3bec] font-bold'>
            {/* Desktop / large screens */}
            <div className='hidden md:flex justify-center items-center'>
                {navItems.map(item => (
                    <a key={item.title} href={item.url ?? '#'} className='mx-2'>{item.title}</a>
                ))}
                <ButtonVoilet label="Start Free" onClick={handleButtonClick} onHover={handleButtonHover} />
            </div>

            {/* Mobile / tablet: hamburger */}
            <div className='flex md:hidden justify-center items-center'>
                <button
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(prev => !prev)}
                    className='p-2 rounded-md text-[#7c3bec] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c3bec]'
                >
                    {open ? (
                        // X icon
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    ) : (
                        // Burger icon
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu panel + backdrop (80vw) */}
            {/* backdrop (always present for animation) */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setOpen(false)}
                aria-hidden
            />

            {/* side panel (always present so CSS transition can run) */}
            <aside className={`fixed inset-y-0 right-0 z-50 w-[80vw] bg-white p-6 md:hidden flex flex-col transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    aria-label='Close menu'
                    onClick={() => setOpen(false)}
                    className='self-end p-2 rounded-md text-[#7c3bec] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7c3bec]'
                >
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>

                <nav className='mt-4 flex-1 flex flex-col items-center justify-center space-y-6'>
                    {navItems.map(item => (
                        <a
                            key={item.title}
                            href={item.url ?? '#'}
                            onClick={() => setOpen(false)}
                            className='text-2xl'
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                <div className='mt-auto'>
                    <ButtonVoilet label="Start Free" onClick={() => { handleButtonClick(); setOpen(false) }} onHover={handleButtonHover} />
                </div>
            </aside>
        </nav>
    )
}

export default Navbar
