import type { PlanCardProps } from '../types/Plans'
import PlanCard from './PlansComponents/PlanCard'
import { usePopup } from '../contexts/PopupContext'

const Plans = () => {
    const { openPopup } = usePopup()

    const handlePlanButtonClick = (planTitle: string, buttonText: string) => {
        if (planTitle === "Starter") {
            openPopup()
        } else {
            console.log(`${buttonText} clicked for ${planTitle} plan`)
        }
    }

    const handlePlanButtonHover = (planTitle: string, buttonText: string) => {
        console.log(`${buttonText} hovered for ${planTitle} plan`)
    }

    const plans: PlanCardProps[] = [
        {
            title: "Starter",
            subtitle: "Perfect for new explorers",
            price: "Free",
            features: [
                "5 guided meditations",
                "2 sleep stories",
                "Parent starter kit"
            ],
            buttonText: "Get Started",
            onButtonClick: () => handlePlanButtonClick("Starter", "Get Started"),
            onButtonHover: () => handlePlanButtonHover("Starter", "Get Started")
        },
        {
            title: "Premium",
            subtitle: "Unlock full potential",
            price: "₹299/mo",
            features: [
                "Unlimited meditations",
                "Sleep stories & calming music",
                "Printable guides for parents"
            ],
            buttonText: "Upgrade Now",
            onButtonClick: () => handlePlanButtonClick("Premium", "Upgrade Now"),
            onButtonHover: () => handlePlanButtonHover("Premium", "Upgrade Now")
        },
        {
            title: "Family",
            subtitle: "For multiple kids",
            price: "₹499/mo",
            features: [
                "4 child profiles",
                "Rewards & streaks",
                "Classroom meditation pack"
            ],
            buttonText: "Get Family Plan",
            onButtonClick: () => handlePlanButtonClick("Family", "Get Family Plan"),
            onButtonHover: () => handlePlanButtonHover("Family", "Get Family Plan")
        }
    ]

    return (
        <div className='w-[80%] mx-auto mt-10'>
            <h2 className='font-extrabold text-3xl mb-4 text-center'>Choose Your Plan</h2>
            <p className='text-gray-700 text-center mb-8 font-bold'>Start your mindfulness journey with the perfect plan for your family</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                {plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                ))}
            </div>
        </div>
    )
}

export default Plans
