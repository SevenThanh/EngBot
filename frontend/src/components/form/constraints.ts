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
    },
    pattern:  {
        value: /^[a-zA-Z0-9]*$/,
        message: "Username must not contain any special characters"
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

export const emailConstraints = {
    required: "Please enter an email",
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: "Please enter a valid email address"
    }
}
