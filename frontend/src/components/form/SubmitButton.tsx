interface SubmitButtonProps {
    text?: string
    style?: string
}

export function SubmitButton({ text, style }: SubmitButtonProps) {
    return (
        <button type="submit" className={style}>
            {text}
        </button>
    )
}
