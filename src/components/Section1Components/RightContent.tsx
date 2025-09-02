import '../../App.css'

const RightContent = () => {
    return (
        <div className="right w-[80%] md:w-[48%] m-4 bg-[#e4e4e4] rounded-2xl p-3 relative">
            {/* Floating div at bottom */}
            <div className="bg-white p-4 transition-all duration-400 ease-in-out shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-2xl w-full rotate-0 block
                lg:absolute lg:bottom-4 lg:left-4 lg:right-auto lg:top-auto lg:w-1/2 lg:rotate-[-10deg] lg:shadow-[0_10px_20px_rgba(0,0,0,0.3)] lg:slow-bounce lg:transition-all lg:duration-400 lg:ease-in-out lg:hover:bottom-0 lg:hover:left-0 lg:hover:right-0 lg:hover:top-0 lg:hover:rounded-2xl lg:hover:rotate-0 lg:hover:w-full">
                <h3 className="font-bold text-lg text-[#1c2638] mb-3">Key Features</h3>
                <ul className="space-y-2 text-[#1c2638]">
                    <li className="flex items-center">
                        <span className="mr-2">•</span>
                        Story-based meditation experiences
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">•</span>
                        Age-appropriate content for 4-15 years
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">•</span>
                        Expert-crafted mindfulness exercises
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightContent
