const ParentTeacherHub = () => {
    const handleDownloadStarterKit = () => {
        console.log("Download Starter Kit (PDF) clicked")
    }

    const handle7DayPlan = () => {
        console.log("7-Day Calm Plan clicked")
    }

    const handleClassroomPack = () => {
        console.log("Classroom Pack clicked")
    }

    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
                <div className="text-left mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Parent & Teacher Hub</h2>
                    <p className="text-gray-700 text-lg font-bold max-w-3xl">
                        Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 flex-wrap">
                    <span
                        className="bg-[#f4f2ff] p-3 text-sm font-bold text-[#7c3bec] rounded-full cursor-pointer hover:bg-[#ebe5ff] transition-colors duration-200"
                        onClick={handleDownloadStarterKit}
                    >
                        📄 Download Starter Kit (PDF)
                    </span>
                    <span
                        className="bg-[#e5fbee] p-3 text-sm font-bold text-[#1a6b52] rounded-full cursor-pointer hover:bg-[#d0f5e0] transition-colors duration-200"
                        onClick={handle7DayPlan}
                    >
                        🗓️ 7-Day Calm Plan
                    </span>
                    <span
                        className="bg-[#fff3cd] p-3 text-sm font-bold text-[#8b6914] rounded-full cursor-pointer hover:bg-[#ffecb3] transition-colors duration-200"
                        onClick={handleClassroomPack}
                    >
                        📦 Classroom Pack
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ParentTeacherHub
