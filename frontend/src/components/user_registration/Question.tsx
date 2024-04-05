import { ButtonGroup, ButtonGroupProps } from "@/components/buttons/ButtonGroup"

interface QuestionProps extends ButtonGroupProps {
    question: string,
    small?: string,
}

export function Question(props: QuestionProps) {
    const { question, labels, small, onSubmit, style, buttonStyle, type="single" } = props
    //just style this for now :)

    return (
        <section className="flex flex-col">
            <h1>{question}</h1>
            {small && <p>{small}</p>}
            <ButtonGroup style={style} buttonStyle={buttonStyle} labels={labels} type={type} onSubmit={onSubmit} />
        </section>
    )
}
