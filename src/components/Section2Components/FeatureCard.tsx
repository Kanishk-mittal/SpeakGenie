import type { FeatureCardProps } from "../../types/Section2"

const FeatureCard = (params: FeatureCardProps) => {
    return (
        <div className="md:w-[29%] p-4">
            <span className="tag bg-[#e5fbee] p-1.5 text-[#1a6b52] font-bold text-sm rounded-full">
                {params.tag}
            </span>
            <h3 className="title text-lg font-extrabold p-2">
                {params.title}
            </h3>
            <p className="description text-sm">
                {params.description}
            </p>
        </div>
    )
}

export default FeatureCard
