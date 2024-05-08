import { RegisterOptions } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

export type RegistrationFunction = (name: string, options?: RegisterOptions) => FieldRegistration

export type FieldRegistration = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    ref: React.Ref<HTMLInputElement>;
    name: string
}

export interface FormFieldProps {
    type: string
    registration: FieldRegistration
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
