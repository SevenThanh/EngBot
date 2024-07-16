import { useState } from "react"
import { SelectionButton } from "./"

export interface ButtonGroupProps {
    labels: string[]
    onSubmit: (selected: number[]) => void
    style: {
        buttonStyle: string
        wrapperStyle: string
        submitStyle?: string
        selectedStyle?: string
    }
    type?: string
}

export function ButtonGroup({
    labels,
    onSubmit,
    style,
    type
}: ButtonGroupProps) {

    //contains the indices of selected buttons
    const [selected, setSelected] = useState<number[]>([])
    const { buttonStyle, wrapperStyle, submitStyle, selectedStyle } = style

    function handleSelection(index: number) {
        if (selected.length === 0 || type === "single") {
            setSelected([index])
            return
        }

        setSelected(prevSelected => {
            if (prevSelected.includes(index))
                return prevSelected.filter(elem => elem != index)
            else
                return prevSelected.concat([index])
        })
    }

    return (
        <div className={wrapperStyle}>
            {labels.map((label, index) =>
                <SelectionButton
                    key={index}
                    text={label}
                    style={buttonStyle}
                    activeStyle={selectedStyle}
                    active={selected.includes(index)}
                    onClick={() => handleSelection(index)}
                />
            )}
            <button onClick={() => onSubmit(selected)}
                className={submitStyle}>
                Submit
            </button>
        </div>
    )
}
