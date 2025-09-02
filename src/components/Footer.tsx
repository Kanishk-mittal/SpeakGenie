import Branding from './HeaderComponents/Branding'

const Footer = () => {
    return (
        <footer className='border-t border-gray-300 mt-16 py-8 px-4'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4'>
                    {/* Branding Section */}
                    <div className='flex flex-col gap-2 md:w-1/3'>
                        <Branding />
                        <p className='text-sm text-gray-600 max-w-xs'>
                            Mindfulness & meditation for kids aged 4-15. Building calm minds and happy hearts.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg font-bold text-gray-800'>Contact</h3>
                        <div className='flex flex-row gap-4'>
                            <a
                                href='#'
                                className='text-[#7c3bec] hover:underline text-sm font-medium'
                            >
                                Instagram
                            </a>
                            <a
                                href='#'
                                className='text-[#7c3bec] hover:underline text-sm font-medium'
                            >
                                YouTube
                            </a>
                            <a
                                href='#'
                                className='text-[#7c3bec] hover:underline text-sm font-medium'
                            >
                                X
                            </a>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg font-bold text-gray-800'>Legal</h3>
                        <div className='flex flex-row gap-4'>
                            <a
                                href='#'
                                className='text-[#7c3bec] hover:underline text-sm font-medium'
                            >
                                Privacy
                            </a>
                            <a
                                href='#'
                                className='text-[#7c3bec] hover:underline text-sm font-medium'
                            >
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
