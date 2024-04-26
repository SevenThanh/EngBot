import { SelectionButtonProps } from "./types"

export function SelectionButton({
    text,
    label,
    active,
    activeStyle,
    onClick,
    style
}: SelectionButtonProps) {
    return (
        <label className={active && activeStyle ? activeStyle : style}>
            {label}
            <button onClick={onClick}>
                {text}
            </button>
        </label>
    )
}
