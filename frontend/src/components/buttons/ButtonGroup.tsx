import { createContext, useState } from "react"
import { SelectionButton } from "./SelectionButton"

type Label = {
    label?: string,
    text: string
}[] | string[]

export type ButtonGroupType = {
    buttonState: number,
    setButtonState: (buttonState: number) => void
}

interface ButtonGroupProps {
    group: string,
    labels: Label,
    type?: string,
}

export const ButtonGroupContext = createContext<ButtonGroupType>(null!)

export function ButtonGroup({ group, labels, type="single" }: ButtonGroupProps) {
    const [buttonState, setButtonState] = useState<number>(null!)

    const labelToButton = (label: Label) => {
        if (typeof label == "string")
            return <SelectionButton group={group} text={label} />
        return <SelectionButton group={group} label={label.label} text={label.text} />
    }

    return (
        <ButtonGroupContext.Provider value={{ buttonState, setButtonState }}>
            {labels.map(labelToButton)}
        </ButtonGroupContext.Provider>
    )
}
