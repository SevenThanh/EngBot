import { useState } from "react"
import { ButtonLabel, ButtonGroupProps } from "./types"
import { SelectionButton } from "./"

export function ButtonGroup({
    labels,
    onSubmit,
    style,
    type
}: ButtonGroupProps) {

    const { buttonStyle, wrapperStyle, submitStyle, activeStyle } = style
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
                activeStyle={activeStyle}
                active={isActive(index)}
                onClick={() => setActive(index)}
            />
        return <SelectionButton
            key={index}
            {...label}
            style={buttonStyle}
            activeStyle={activeStyle}
            active={isActive(index)}
            onClick={() => setActive(index)}
        />
    }

    return (
        <div className={wrapperStyle}>
            {labels.map(labelToButton)}
            <button onClick={() => onSubmit(buttonState)}
                className={submitStyle}>
                submit
            </button>
        </div>
    )
}
