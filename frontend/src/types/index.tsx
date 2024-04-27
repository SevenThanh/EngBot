export type LOADING_STATUS = 0 | 1 | string;
//0: loading success
//1: currently loading
//string: error message

export type User = {
    type: string; //student, parent, etc.
    proficiency: string;
    learning_reason: string;
    heard_from: string;
    [key: string]: unknown;
};

export type UserAuth = {
    id: string;
    username: string;
    password: string;
};
