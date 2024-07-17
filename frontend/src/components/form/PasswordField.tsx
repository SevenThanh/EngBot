import {
    FormField,
    FormFieldProps,
    RegistrationFunction,
    FieldRegistration } from "./FormField"
import { passwordConstraints } from "./constraints"

interface PasswordFieldProps extends Partial<FormFieldProps> {
    errors: object
    register: RegistrationFunction | FieldRegistration
}

export function PasswordField({
    style,
    register,
    errors,
    placeholder="Password",
    errorStyle="text-red-500",
}: PasswordFieldProps) {
    return (
        <FormField
            type="password"
            placeholder={placeholder}
            style={style}
            registration={
                typeof register === "object" ?
                register : register("password", passwordConstraints)
            }
            errorStyle={errorStyle}
            errors={errors}
            hasError={true}
        />
    )
}
