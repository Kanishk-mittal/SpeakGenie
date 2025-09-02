import type { FeatureCardProps } from '../types/Section2'
import FeatureCard from './Section2Components/FeatureCard'

const Section2 = () => {
    const Features: FeatureCardProps[] = [
        {
            tag: "Story Meditation",
            title: "Guided Adventures",
            description: "Short, age-wise journey that helps kids calm down their bodies and name their feelings."
        },
        {
            tag: "Anytime Calm",
            title: "Tools for Big Feelings",
            description: `Quick "reset" audios for anger, worry, pre-exam jitters,and bedtime battles. `
        },
        {
            tag: "Parent Hub",
            title: "Guides & Routines",
            description: "Weekly tips, printable Charts and simple routines you can use at home or school."
        }
    ]
    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='font-bold text-3xl mb-4'>Why Mindery Kids ?</h2>
            <div className='w-[50%]'>
                Children learn best through play and stories. Our session blend gentle breathing, guided imagery, and music to make mindfulness enjoyable and effective.
            </div>
            <div className='flex flex-row py-4 justify-between'>
                {Features.map((feature, index) => (
                    <FeatureCard key={index} tag={feature.tag} description={feature.description} title={feature.title} />
                ))}
            </div>
        </div>
    )
}

export default Section2
