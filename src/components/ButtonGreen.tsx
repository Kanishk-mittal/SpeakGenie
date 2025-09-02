import type { ButtonProps } from "../types/Button"

const ButtonGreen = (input: ButtonProps) => {
    return (
        <button
            className="bg-[#20c55c] active:bg-green-700 rounded-xl text-white py-2 px-4 mx-2 cursor-pointer"
            onClick={input.onClick}
            onMouseEnter={input.onHover}
        >
            {input.label}
        </button>
    )
}

export default ButtonGreen
