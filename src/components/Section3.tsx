import group4to6 from '../assets/4to6.png'
import group7to10 from '../assets/7to10.png'
import group11to14 from '../assets/11to14.png'
import type { AgeFroupsProps } from '../types/Section3'
import AgeGroups from './Section3Components/AgeGroups'
const Section3 = () => {
    const ageGroupsProps: AgeFroupsProps[] = [
        {
            imagePos: 'left',
            title: 'Little Explorers (4-6)',
            description: 'Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds and gentle stretching.',
            tags: ['🐼Cozy Corner', '🎶Calm Music', '🥇Sticker Badges'],
            imageUrl: group4to6
        },
        {
            imagePos: 'right',
            title: 'Brave Thinkers (7-10)',
            description: 'Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness',
            tags: ['⏳Focus timer', '📝Gratitude Notes', '🌟Streak Rewards'],
            imageUrl: group7to10
        },
        {
            imagePos: 'left',
            title: 'Calm and Curious (11-14)',
            description: 'Longer meditation, reframing thoughts, and sleep stories for deeper rest and emotional rest.',
            tags: ['⏲️Mindset mins', '🌙Sleep Stories', '🎯Goal Cards'],
            imageUrl: group11to14
        }
    ]
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <h2 className='font-bold text-3xl mb-4'>Why Mindery Kids ?</h2>
            <div className='p-4'>Pick a track or mix and match. Each program grows with your child</div>
            <div className='flex gap-2 flex-col'>
                {ageGroupsProps.map((props, index) => (
                    <AgeGroups key={index} {...props} />
                ))}
            </div>
        </div>
    )
}

export default Section3
