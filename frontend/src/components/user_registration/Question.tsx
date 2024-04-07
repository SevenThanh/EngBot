import { ButtonGroup, ButtonGroupProps } from "@/components/buttons/ButtonGroup"

interface QuestionProps extends ButtonGroupProps {
    question: string,
    small?: string,
}

export function Question({
    question,
    labels,
    small,
    onSubmit,
    style,
    buttonStyle,
    activeButtonStyle,
    type="single"
}: QuestionProps) {
    return (
        <section className="flex flex-col">
            <h1>{question}</h1>
            {small && <p>{small}</p>}
            <ButtonGroup
                labels={labels}
                type={type}
                onSubmit={onSubmit}
                style={style}
                buttonStyle={buttonStyle}
                activeButtonStyle={activeButtonStyle}
            />
        </section>
    )
}
