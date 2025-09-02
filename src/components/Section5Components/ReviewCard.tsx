import type { ReviewCardProps } from "../../types/Reviews"

const ReviewCard = ({ rating, review, name, childAge }: ReviewCardProps) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
                ⭐
            </span>
        ))
    }

    return (
        <div className='p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white'>
            <div className='flex items-center mb-4'>
                {renderStars(rating)}
            </div>
            <p className='text-gray-700 mb-4 italic'>"{review}"</p>
            <div className='text-sm text-gray-600 font-bold'>
                ~ {name}, parent of {childAge}-year-old
            </div>
        </div>
    )
}

export default ReviewCard
