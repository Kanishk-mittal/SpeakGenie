import type { FeatureCardProps } from "../../types/Section1"

const FeatureCard = ({ emoji, heading, description }: FeatureCardProps) => {
    return (
        <div className="flex flex-row items-center p-4 rounded-xl shadow-md bg-white transition-transform duration-200 hover:scale-120 will-change-transform">
            <div className="flex items-center justify-center h-full mr-4">
                <span>{emoji}</span>
            </div>
            <div className="flex flex-col justify-between h-full">
                <p className="text-gray-600 text-sm font-semibold mb-2">{description}</p>
                <h3 className="font-extrabold text-lg">{heading}</h3>
            </div>
        </div>
    )
}

export default FeatureCard
