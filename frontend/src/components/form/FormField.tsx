import { ErrorMessage } from '@hookform/error-message'

interface FormFieldProps {
    type: string
    registration: {
        onChange: React.ChangeEventHandler<HTMLInputElement>
        onBlur: React.FocusEventHandler<HTMLInputElement>
        ref: React.Ref<HTMLInputElement>
        name: string
    }
    placeholder?: string
    errorStyle?: string
    errors: object
}

export function FormField({ type, placeholder, registration, errorStyle, errors }: FormFieldProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                {...registration}
            />
            <ErrorMessage
                as="span"
                className={errorStyle}
                name={registration.name}
                errors={errors}
            />
        </>
    )
}
