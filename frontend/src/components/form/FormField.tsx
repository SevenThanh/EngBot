import { ErrorMessage } from '@hookform/error-message'

interface FormFieldProps {
    type: string
    registration: {
        onChange: React.ChangeEventHandler<HTMLInputElement>
        onBlur: React.FocusEventHandler<HTMLInputElement>
        ref: React.Ref<HTMLInputElement>
        name: string
    }
    style?: string
    placeholder?: string
    errorStyle?: string
    hasError?: boolean
    errors: object
}

export function FormField({
    type,
    placeholder,
    registration,
    style,
    errorStyle,
    errors,
    hasError=true
}: FormFieldProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className={style}
                {...registration}
            />
            { hasError &&
                <ErrorMessage
                    as="span"
                    className={errorStyle}
                    name={registration.name}
                    errors={errors}
                />
            }
        </>
    )
}
