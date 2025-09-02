import React from 'react'

type FeatureItem = {
    feature: string;
    minderyKids: {
        available: boolean;
        description: string;
    };
    otherApps: {
        available: boolean;
        description: string;
    };
};

const Comparison: React.FC = () => {
    const features: FeatureItem[] = [
        {
            "feature": "Child-Friendly Guided Meditations",
            "minderyKids": {
                "available": true,
                "description": "Story-based, fun & short"
            },
            "otherApps": {
                "available": false,
                "description": "Generic adult content"
            }
        },
        {
            "feature": "Safe & Ad-Free Environment",
            "minderyKids": {
                "available": true,
                "description": "100% secure for kids"
            },
            "otherApps": {
                "available": false,
                "description": "Ads & distractions"
            }
        },
        {
            "feature": "Age-Specific Programs",
            "minderyKids": {
                "available": true,
                "description": "Tailored for 4-14"
            },
            "otherApps": {
                "available": false,
                "description": "One-size-fits-all"
            }
        },
        {
            "feature": "Parent & Teacher Support",
            "minderyKids": {
                "available": true,
                "description": "Guides, printables, progress insights"
            },
            "otherApps": {
                "available": false,
                "description": "Limited or none"
            }
        }
    ]
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <h2 className='font-bold text-3xl mb-4'>Why Choose Mindery Kids Over Others ?</h2>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse drop-shadow-2xl">
                    <thead>
                        <tr className="text-left">
                            <th className="px-3 py-2 text-[#7c3bec]">Feature</th>
                            <th className="px-3 py-2 text-[#7c3bec]">Mindery Kids</th>
                            <th className="px-3 py-2 text-[#7c3bec]">Other Apps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((item, idx) => (
                            <tr key={idx} className="">
                                <td className="px-3 py-2 text-black align-top">{item.feature}</td>
                                <td className="px-3 py-2 text-black align-top">
                                    <div className="flex items-center space-x-2">
                                        <span className={item.minderyKids.available ? 'text-green-600' : 'text-red-600'} aria-hidden>
                                            {item.minderyKids.available ? '✓' : '✕'}
                                        </span>
                                        <span className="hidden md:inline">{item.minderyKids.description}</span>
                                    </div>
                                </td>
                                <td className="px-3 py-2 text-black align-top">
                                    <div className="flex items-center space-x-2">
                                        <span className={item.otherApps.available ? 'text-green-600' : 'text-red-600'} aria-hidden>
                                            {item.otherApps.available ? '✓' : '✕'}
                                        </span>

                                        <span className="hidden md:inline">{item.otherApps.description}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Comparison
