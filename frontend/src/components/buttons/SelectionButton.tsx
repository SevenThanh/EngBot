interface SelectionProps {
    text: string,
    label?: string,
    active: boolean,
    onClick: () => void
}

export function SelectionButton({ text, label, active, onClick }: SelectionProps) {
    return (
        <label className={active ? "text-2xl" : ""}>
            {label}
            <button onClick={onClick}>
                {text}
            </button>
        </label>
    )
}
