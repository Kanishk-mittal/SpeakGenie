import type { ButtonProps } from "../types/Button"

const ButtonVoilet = (input: ButtonProps) => {
    return (
        <button
            className="bg-[#7c3bec] active:bg-violet-700 rounded-xl text-white py-2 px-4 m-2 cursor-pointer"
            onClick={input.onClick}
            onMouseEnter={input.onHover}
        >
            {input.label}
        </button>
    )
}

export default ButtonVoilet
