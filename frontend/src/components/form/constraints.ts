//form constraints for certain repetitive types of form fields
//eg. username, password, emails, etc

export const usernameConstraints = {
    required: "Please enter a username",
    maxLength: {
        value: 30,
        message: "Username must be shorter than 30 characters",
    },
    minLength: {
        value: 3,
        message: "Username must be longer than 3 characters",
    }
}

export const passwordConstraints = {
    required: "Please enter a password",
    maxLength: {
        value: 30,
        message: "Password must be shorter than 30 characters",
    },
    minLength: {
        value: 3,
        message: "Password must be longer than 3 characters",
    },
    pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    }
}
