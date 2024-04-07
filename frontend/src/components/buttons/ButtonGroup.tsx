import { useState } from "react"
import { SelectionButton } from "./SelectionButton"

export type ButtonLabel = {
    label?: string,
    text: string
} | string

export interface ButtonGroupProps {
    labels: ButtonLabel[],
    onSubmit: (active: number | number[]) => void,
    type?: string,
    style?: string,
    buttonStyle?: string
}

export function ButtonGroup({ labels, onSubmit, style, buttonStyle, type }: ButtonGroupProps) {
    const [buttonState, setButtonState] = useState<number | number[]>(() => {
        if (type == "single")
            return -1
        return []
    })

    const isActive = type == "single" ?
        (id: number) => buttonState == id :
        (id: number) => (buttonState as number[]).includes(id)

    const setActive = type == "single" ?
        (id: number) => setButtonState(id) :
        (id: number) => setButtonState(prevState => {
            if ((prevState as number[]).includes(id))
                return (prevState as number[]).filter(elem => elem != id)
            return (prevState as number[]).push(id)
        })

    const labelToButton = (label: ButtonLabel, index: number) => {
        if (typeof label == "string")
            return <SelectionButton
                key={index}
                text={label}
                style={buttonStyle}
                active={isActive(index)}
                onClick={() => setActive(index)} />
        return <SelectionButton
            key={index}
            {...label}
            style={buttonStyle}
            active={isActive(index)}
            onClick={() => setActive(index)} />
    }

    return (
        <div className={style}>
            {labels.map(labelToButton)}
            <button onClick={() => onSubmit(buttonState)}>submit</button>
        </div>
    )
}
