import { createContext, useState } from "react"
import { SelectionButton } from "./SelectionButton"

interface ButtonGroupProps {
    group: string,
    labels: string[],
    type?: string,
}

export function ButtonGroup({ group, labels, type="single" }: ButtonGroupProps) {
    const groupContext = createContext<number>(null!)
    const [buttonState, setButtonState] = useState<number>(null!)

    return (
        <groupContext.Provider value={{ buttonState, setButtonState }}>
            {labels.map(label => <SelectionButton group={group} label={label} />)}
        </groupContext.Provider>
    )
}
