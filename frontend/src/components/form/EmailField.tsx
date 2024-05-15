import {
    FormField,
    FormFieldProps,
    RegistrationFunction,
    FieldRegistration } from "./FormField"
import { emailConstraints } from "./constraints"

interface PasswordFieldProps extends Partial<FormFieldProps> {
    errors: object
    register: RegistrationFunction | FieldRegistration
}

export function EmailField({
    style,
    register,
    errors,
    placeholder="Email",
    errorStyle="text-red-500",
}: PasswordFieldProps) {
    return (
        <FormField
            type="password"
            placeholder={placeholder}
            style={style}
            registration={
                typeof register === "object" ?
                register : register("email", emailConstraints)
            }
            errorStyle={errorStyle}
            errors={errors}
            hasError={true}
        />
    )
}
