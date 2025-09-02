import { useState } from 'react'
import type { FAQItemProps } from "../../types/FAQ"

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white'>
            <div 
                className='flex justify-between items-center cursor-pointer'
                onClick={toggleOpen}
            >
                <h3 className='font-bold text-xl text-gray-800 pr-4'>{question}</h3>
                <span className={`text-2xl font-bold text-[#7c3bec] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </div>
            
            <div className={`mt-3 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className='text-gray-700 leading-relaxed'>{answer}</p>
            </div>
        </div>
    )
}

export default FAQItem
