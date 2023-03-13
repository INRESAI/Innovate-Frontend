export interface GetAllQuestionByCriteriaIdRequest {
    token: string,
    criteriaId: string,
}

export interface IGetAllQuestionsByCriteriaResponse {
    setOfQuestions: setOfQuestions;
    questions: questions[];
}

export interface setOfQuestions {
    _id: string;
    name: string;
    description?: string;
}

export interface questions {
    question: IQuestion;
    answers: IAnswers[];
}
export interface IQuestion {
    title: string,
    description: string,
    content: string,
    setQuestionId: string,
    createdAt?: Date,
    updatedAt?: Date,
    id: string
}

export interface IAnswers {
    questionId: string,
    content: string,
    description: string,
    point: number,
    createdAt?: Date,
    updatedAt?: Date,
    id: string,
    key: number,
    isChosen: boolean,
}