import { useState } from "react"
import { SelectionButton } from "./SelectionButton"

type Label = {
    label?: string,
    text: string
} | string

export type ButtonGroupType = {
    buttonState: number,
    setButtonState: (buttonState: number) => void
}

interface ButtonGroupProps {
    group: string,
    labels: Label[],
    type?: string,
}

export function ButtonGroup({ group, labels, type="single" }: ButtonGroupProps) {
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

    const labelToButton = (label: Label, index: number) => {
        if (typeof label == "string")
            return <SelectionButton
                key={index}
                id={index}
                group={group}
                text={label}
                active={() => isActive(index)}
                onClick={() => setActive(index)} />
        return <SelectionButton
            key={index}
            id={index}
            group={group}
            {...label}
            active={() => isActive(index)}
            onClick={() => setActive(index)} />
    }

    return (
        <div>
            {labels.map(labelToButton)}
        </div>
    )
}
