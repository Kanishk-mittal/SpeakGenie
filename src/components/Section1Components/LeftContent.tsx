import ButtonVoilet from '../ButtonVoilet'
import ButtonGreen from '../ButtonGreen'
import type { FeatureCardProps } from '../../types/Section1'
import FeatureCard from './FeatureCard'
import { usePopup } from '../../contexts/PopupContext'

const LeftContent = () => {
    const { openPopup } = usePopup()
    const freeTrialButtonClick = () => {
        openPopup()
    }
    const freeTrialButtonHover = () => {
        console.log("Free Trial Button Hovered")
    }
    const exploreProgramsClick = () => {
        console.log("Explore Programs Button Clicked")
    }
    const exploreProgramsHover = () => {
        console.log("Explore Programs Button Hovered")
    }
    const featureCardProps: FeatureCardProps[] = [
        {
            emoji: "🧠",
            heading: "Focus",
            description: "Improves"
        },
        {
            emoji: "😫",
            heading: "Stress",
            description: "Reduces"
        },
        {
            emoji: "😴",
            heading: "Sleep",
            description: "Better"
        },
        {
            emoji: "♥️",
            heading: "Empathy",
            description: "Builds"
        }
    ]
    return (
        <div className="left min-h-40 w-[80%] md:w-[50%]">
            <span className='bg-[#f4f2ff] p-1.5 text-xs font-bold text-[#6930bb] rounded-full'>
                🌈Calm Minds, Happy Hearts
            </span>
            <h1 className='font-extrabold text-5xl py-2 text-[#1c2638]'>
                Mindfullness & Meditation for Kids (4-15)
            </h1>
            <div className='text-[#1c2638] text-sm pt-6'>
                Fun, story-based meditation that builds focus, kindness and confidence.
            </div>
            <div className='text-[#1c2638] text-sm pb-6'>
                Safe, ad-free, and crafted with child-development experts.
            </div>
            <div>
                <ButtonVoilet label='Start Free Trial' onClick={freeTrialButtonClick} onHover={freeTrialButtonHover} />
                <ButtonGreen label='Explore Programs' onClick={exploreProgramsClick} onHover={exploreProgramsHover} />
            </div>
            <div className='flex flex-row justify-between py-8 gap-1 flex-wrap' >
                {featureCardProps.map((card) => (
                    <FeatureCard {...card} />
                ))}
            </div>
        </div>
    )
}

export default LeftContent
