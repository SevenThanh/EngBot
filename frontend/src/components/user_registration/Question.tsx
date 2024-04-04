import { ButtonGroup } from "@/components/buttons/ButtonGroup"

interface QuestionProps {
    question: string,
    answers: string[],
    small?: string,
    type?: string,
}

export function Question({ question, answers, small, type="single" }: QuestionProps) {
    //just style this for now :)

    return (
        <section className="flex flex-col">
            <h1>{question}</h1>
            {small && <p>{small}</p>}
            <ButtonGroup group={question} labels={answers} />
        </section>
    )
}
