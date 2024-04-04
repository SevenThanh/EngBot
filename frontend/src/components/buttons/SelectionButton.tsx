import { ButtonGroup } from "./ButtonGroup"

interface SelectionProps {
    group: string,
    text: string,
    label?: string,
    id: number,
    active: () => boolean,
    onClick: () => void
}

export function SelectionButton({ id, group, text, label, onClick }: SelectionProps) {
    return (
        <label>
            {label}
            <button onClick={}>
                {text}
            </button>
        </label>
    )
}
