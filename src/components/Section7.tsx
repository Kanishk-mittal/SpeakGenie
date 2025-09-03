import ButtonVoilet from './ButtonVoilet'
import ButtonGreen from './ButtonGreen'
import { usePopup } from '../contexts/PopupContext'

const Section7 = () => {
    const { openPopup } = usePopup()
    const handleCreateAccount = () => {
        openPopup()
    }

    const handleCreateAccountHover = () => {
        console.log("Create Account button hovered")
    }

    const handleDownloadApp = () => {
        console.log("Download App button clicked")
    }

    const handleDownloadAppHover = () => {
        console.log("Download App button hovered")
    }

    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className="bg-white rounded-xl shadow-lg p-8 text-left">
                <h2 className='font-extrabold text-3xl mb-4'>Start Your Child's Mindfulness Journey</h2>
                <p className='text-gray-700 text-lg font-bold mb-8 max-w-2xl'>
                    Try it free. Build calm, focus, and kindness - one small practice a day
                </p>
                <div className="flex flex-col md:flex-row justify-start items-start gap-4">
                    <ButtonVoilet
                        label="Create Account"
                        onClick={handleCreateAccount}
                        onHover={handleCreateAccountHover}
                    />
                    <ButtonGreen
                        label="Download App"
                        onClick={handleDownloadApp}
                        onHover={handleDownloadAppHover}
                    />
                </div>
            </div>
        </div>
    )
}

export default Section7
