interface SelectionProps {
    text: string,
    label?: string,
    active: boolean,
    onClick: () => void,
    style?: string
}

export function SelectionButton({ text, label, active, onClick, style }: SelectionProps) {
    return (
        <label className={active ? "text-2xl " + style : style}>
            {label}
            <button onClick={onClick}>
                {text}
            </button>
        </label>
    )
}
