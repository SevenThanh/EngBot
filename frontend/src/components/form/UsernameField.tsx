import {
    FormField,
    FormFieldProps,
    RegistrationFunction,
    FieldRegistration } from "./FormField"
import { usernameConstraints } from "./constraints"

interface UsernameFieldProps extends Partial<FormFieldProps> {
    errors: object
    register: RegistrationFunction | FieldRegistration
}

export function UsernameField({
    style,
    register,
    errors,
    placeholder="Username",
    errorStyle="text-red-500",
}: UsernameFieldProps) {
    return (
        <FormField
            type="text"
            placeholder={placeholder}
            style={style}
            registration={
                typeof register === "object" ?
                register : register("username", usernameConstraints)
            }
            errorStyle={errorStyle}
            errors={errors}
            hasError={true}
        />
    )
}
