export interface PutResultRequest {
    listAnswer: Answer[],
    additionalProp1: {}
}
export interface PostResultRequest {
    criteriaId: string,
    listAnswer: Answer[],
    additionalProp1: {}
}
export interface Answer {
    questionId: string,
    answerId: string,
    point: number,
    additionalProp1: {}
}

export interface Result {
    createdAt: Date,
    criteriaId: string,
    id: string,
    isDone: boolean,
    numberOfAnswered: number,
    total: number,
    updatedAt: Date,
    userId: string,
}

