import { useState } from "react"
import { SelectionButton } from "./SelectionButton"

export type ButtonLabel = {
    label?: string,
    text: string
} | string

export interface ButtonGroupProps {
    labels: ButtonLabel[],
    onSubmit: (active: number[]) => void,
    type?: string,
    style?: string,
    buttonStyle?: string,
    submitStyle?: string,
    activeButtonStyle?: string
}

export function ButtonGroup({
    labels,
    onSubmit,
    style,
    activeButtonStyle,
    buttonStyle,
    submitStyle,
    type
}: ButtonGroupProps) {

    const [buttonState, setButtonState] = useState<number[]>([])

    const isActive = (id: number) => buttonState.includes(id)

    function setActive(id: number) {
        if (buttonState.length === 0 || type === "single") {
            setButtonState([id])
            return
        }

        if (buttonState.includes(id)) {
            setButtonState(prevState => prevState.filter(elem => elem != id))
            return
        }
        setButtonState(prevState => prevState.concat([id]))
    }

    const labelToButton = (label: ButtonLabel, index: number) => {
        if (typeof label == "string")
            return <SelectionButton
                key={index}
                text={label}
                style={buttonStyle}
                activeStyle={activeButtonStyle}
                active={isActive(index)}
                onClick={() => setActive(index)}
            />
        return <SelectionButton
            key={index}
            {...label}
            style={buttonStyle}
            activeStyle={activeButtonStyle}
            active={isActive(index)}
            onClick={() => setActive(index)}
        />
    }

    return (
        <div className={style}>
            {labels.map(labelToButton)}
            <button onClick={() => onSubmit(buttonState)}
                className={submitStyle}>
                submit
            </button>
        </div>
    )
}
