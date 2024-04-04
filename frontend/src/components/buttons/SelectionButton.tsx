import { ButtonGroupContext, ButtonGroupType } from "./ButtonGroup"

interface SelectionProps {
    group: string,
    text: string,
    label?: string,
}

export function SelectionButton({ group, text, label }: SelectionProps) {
    return (
        <label>
            {label}
            <button>
                {text}
            </button>
        </label>
    )
}
