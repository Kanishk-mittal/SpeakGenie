import { useState } from 'react'
import ButtonGreen from './ButtonGreen'
import { usePopup } from '../contexts/PopupContext'

interface FormData {
    name: string
    email: string
    phone: string
    class: string
    message: string
}

const Popup = () => {
    const { closePopup } = usePopup()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        class: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        console.log('Form Data:', formData)
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            class: '',
            message: ''
        })
    }

    const handleClose = () => {
        // Reset form when closing
        setFormData({
            name: '',
            email: '',
            phone: '',
            class: '',
            message: ''
        })
        closePopup()
    }

    return (
        <>
            {/* Desktop blur background - hidden on mobile */}
            <div className="hidden md:block fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40" />

            {/* Popup container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
                {/* Popup content */}
                <div className="w-full h-full md:w-[50vh] md:h-auto bg-white rounded-none md:rounded-xl shadow-2xl overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        >
                            ×
                        </button>
                    </div>

                    {/* Form */}
                    <div className="p-6 space-y-4">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20c55c] focus:border-transparent"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20c55c] focus:border-transparent"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20c55c] focus:border-transparent"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Class Field */}
                        <div>
                            <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                                Class
                            </label>
                            <input
                                type="text"
                                id="class"
                                name="class"
                                value={formData.class}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20c55c] focus:border-transparent"
                                placeholder="Enter your class/grade"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20c55c] focus:border-transparent resize-none"
                                placeholder="Enter your message"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 pt-4">
                            <ButtonGreen
                                label="Submit"
                                onClick={handleSubmit}
                                onHover={() => { }}
                            />
                            <button
                                onClick={handleClose}
                                className="bg-gray-500 active:bg-gray-700 rounded-xl text-white py-2 px-4 m-2 cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
