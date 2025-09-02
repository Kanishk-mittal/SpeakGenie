const Section4 = () => {
    const features: { title: string, description: string }[] = [
        {
            title: "Ad-Free & Safe",
            description: "Child First Design and privacy control with no external ads."
        },
        {
            title: "Rewards that Motivate",
            description: "Star, badges and gentle streak encourage healthy habits - no pressure."
        },
        {
            title: "Offline Access",
            description: "Download favourite sessions for calm on the go."
        },
        {
            title: "Sleep Mode",
            description: "Fade out music and dim visuals help kids drift off peacefully."
        },
        {
            title: "Classroom Friendly",
            description: "Teacher packs with 5-minute start-of-class resets and posters."
        },
        {
            title: "Multi-Child profile ",
            description: "Personalized track for each child in the family."
        }
    ]
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <h2 className='font-bold text-3xl mb-4'>Built for Kids, Loved by Parents</h2>
            <div className='flex flex-wrap justify-center gap-6 mt-8'>
                {features.map((feature, index) => (
                    <div key={index} className='p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300' style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                        <h3 className='font-bold text-xl mb-2 text-gray-800'>{feature.title}</h3>
                        <p className='text-gray-600'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section4
