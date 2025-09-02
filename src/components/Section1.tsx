import LeftContent from "./Section1Components/LeftContent"
import RightContent from "./Section1Components/RightContent"

const Section1 = () => {

    return (
        <div className='w-[80vw] mx-auto py-16'>
            <div className='flex justify-around items-stretch flex-col md:flex-row'>
                <LeftContent />
                <RightContent />
            </div>
        </div>
    )
}

export default Section1
