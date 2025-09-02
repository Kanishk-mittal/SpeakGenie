import type { FAQItemProps } from '../types/FAQ'
import FAQItem from './FrequentlyAskedQuestionsComponents/FAQItem'

const FrequentlyAskedQuestions = () => {
    const faqs: FAQItemProps[] = [
        {
            question: "What ages is this for?",
            answer: "Mindery Kids is designed for children aged 4-15 years. We have age-specific programs: Little Explorers (4-6), Brave Thinkers (7-10), and Calm and Curious (11-14). Each program is tailored to the developmental needs and attention spans of different age groups."
        },
        {
            question: "How long are the sessions?",
            answer: "Session lengths vary by age group. For ages 4-6, sessions are 3-5 minutes. For ages 7-10, sessions range from 5-10 minutes. For ages 11-14, sessions can be 10-15 minutes. All sessions are designed to fit into busy schedules and maintain children's attention."
        },
        {
            question: "Is it safe and ad-free?",
            answer: "Yes! Mindery Kids is 100% safe and completely ad-free. We prioritize child safety with no external advertisements, secure content, and privacy controls. Parents can trust that their children are in a safe, distraction-free environment focused solely on mindfulness and well-being."
        },
        {
            question: "Can schools use it?",
            answer: "Absolutely! We offer special classroom packs designed for teachers. These include 5-minute start-of-class reset sessions, printable posters, and teacher guides. Many educators use our content to help students focus, reduce anxiety, and create a calmer classroom environment."
        }
    ]

    return (
        <div className='w-[80%] mx-auto mt-10'>
            <h2 className='font-bold text-3xl mb-4'>Frequently Asked Questions</h2>
            <div className='flex flex-col gap-4 mt-8'>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions
