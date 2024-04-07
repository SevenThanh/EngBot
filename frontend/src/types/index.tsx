export type User = {
    id?: string, //optional FOR NOW
    username: string, //password will be handled with firebase authentication
    type: string, //student, parent, etc.
    proficiency: number, //english skill elo
    [key: string]: unknown
}
