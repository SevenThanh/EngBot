export type LOADING_STATUS = 0 | 1 | string
//0: loading success
//1: currently loading
//string: error message

export type User = {
    type: string; //student, parent, etc.
    proficiency: number;
    learning_reason: number;
    heard_from: number;
    [key: string]: unknown;
};

export type UserAuth = {
    id: string;
    username: string;
    password: string;
};
