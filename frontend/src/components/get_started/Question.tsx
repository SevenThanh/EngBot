export interface QuestionProps {
    question: string,
    answers: string[],
}

export function Question({ question, answers }: QuestionProps) {
    //just style this for now :)
    return (
        <section className="flex flex-col">
            <h1>{question}</h1>
            {answers.map(ans => <div>{ans}</div>)}
        </section>
    )
}
