import type { AgeFroupsProps } from "../../types/Section3";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const AgeGroups = ({ imagePos, title, description, tags, imageUrl }: AgeFroupsProps) => {
    return (
        <div className={`flex w-full items-center justify-between flex-col ${imagePos === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="md:w-1/2">
                <LazyLoadImage
                    alt={title}
                    src={imageUrl}
                    effect="blur"
                    width="100%"
                    className="rounded-2xl"
                />
            </div>
            <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string, index: number) => (
                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AgeGroups;