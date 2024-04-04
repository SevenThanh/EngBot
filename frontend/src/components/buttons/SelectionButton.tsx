interface SelectionProps {
    group: string,
    text: string,
}

export function SelectionButton({ group, text }: SelectionProps) {
    return (
        <button>
            {text}
        </button>
    )
}
