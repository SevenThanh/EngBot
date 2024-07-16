import { ButtonGroup } from "@/components/buttons/"
import { ButtonGroupProps } from "@/components/buttons/ButtonGroup"

interface QuestionProps extends ButtonGroupProps {
    question: string
    small?: string
}

export function Question({
    question,
    labels,
    small,
    onSubmit,
    style,
    type="single"
}: QuestionProps) {
    return (
        <>
            <h1>{question}</h1>
            {small && <p>{small}</p>}
            <ButtonGroup
                labels={labels}
                type={type}
                onSubmit={onSubmit}
                style={style}
            />
        </>
    )
}
