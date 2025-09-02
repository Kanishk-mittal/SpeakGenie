import type { PlanCardProps } from "../../types/Plans"
import ButtonVoilet from "../ButtonVoilet"

const PlanCard = ({ title, subtitle, price, features, buttonText }: PlanCardProps) => {
    const handleButtonClick = () => {
        console.log(`${buttonText} clicked for ${title} plan`)
    }

    const handleButtonHover = () => {
        console.log(`${buttonText} hovered for ${title} plan`)
    }

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm font-bold mb-4">{subtitle}</p>
                <div className="text-3xl font-extrabold text-[#7c3bec] mb-6">{price}</div>
            </div>

            <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-800">
                            <span className="text-green-600 mr-3 text-lg">✅</span>
                            <span className="text-sm font-bold">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto text-center">
                <ButtonVoilet
                    label={buttonText}
                    onClick={handleButtonClick}
                    onHover={handleButtonHover}
                />
            </div>
        </div>
    )
}

export default PlanCard
