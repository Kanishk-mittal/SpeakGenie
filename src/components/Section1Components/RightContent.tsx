import '../../App.css'

const RightContent = () => {
    return (
        <div className="right w-[48%] m-4 bg-[#e4e4e4] rounded-2xl p-3 relative">
            {/* Floating div at bottom */}
            <div className="absolute bottom-4 left-4 w-1/2 bg-white rounded-2xl p-4 transition-all duration-400 ease-in-out rotate-[-10deg] hover:bottom-0 hover:left-0 hover:right-0 hover:top-0 hover:rounded-2xl hover:rotate-0 hover:w-full group slow-bounce shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
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
