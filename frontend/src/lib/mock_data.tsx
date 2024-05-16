export async function MOCK_USER() {
    return {
        type: "Other",
        proficiency: "New",
        learning_reason: "Other",
        heard_from: "Other",
    }
}

export async function MOCK_USER_CREDENTIALS() {
    return {
        id: "0",
        username: "mock-user!",
        password: "mock-password!"
    }
}
