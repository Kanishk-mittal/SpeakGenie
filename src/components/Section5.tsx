import type { ReviewCardProps } from '../types/Reviews'
import ReviewCard from './Section5Components/ReviewCard'

const Section5 = () => {
    const reviews: ReviewCardProps[] = [
        {
            rating: 5,
            review: "My 8-year-old daughter loves the meditation stories! She actually asks to do them before bedtime now. It's helped her sleep better and feel calmer at school.",
            name: "Sarah",
            childAge: 8
        },
        {
            rating: 5,
            review: "As a teacher, I use the classroom pack daily. The 5-minute reset sessions work wonders for my students' focus and behavior. Highly recommend!",
            name: "Michael",
            childAge: 10
        },
        {
            rating: 4,
            review: "Great app for kids! My twin boys (age 6) enjoy the animal stories and breathing exercises. It's helped them manage their emotions much better.",
            name: "Jennifer",
            childAge: 6
        }
    ]

    return (
        <div className='w-[80%] mx-auto mt-10'>
            <h2 className='font-bold text-3xl mb-4'>What Families Say</h2>
            <div className='flex flex-wrap justify-center gap-6 mt-8'>
                {reviews.map((review, index) => (
                    <div key={index} style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                        <ReviewCard {...review} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section5
