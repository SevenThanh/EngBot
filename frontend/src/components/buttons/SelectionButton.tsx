interface SelectionProps {
    text: string,
    label?: string,
    active: boolean,
    onClick: () => void,
    style?: string,
    activeStyle?: string
}

export function SelectionButton({ text, label, active, activeStyle, onClick, style }: SelectionProps) {
    return (
        <label className={active && activeStyle ? activeStyle : style}>
            {label}
            <button onClick={onClick}>
                {text}
            </button>
        </label>
    )
}
