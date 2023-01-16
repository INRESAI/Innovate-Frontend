import { ISetOfQuestions } from "./define-setOfQuestions";

export interface IGetAllQuestionsByCriteriaResponse{
    id: string;
    criteriaName: string;
    setOfQuestionsLst: ISetOfQuestions[];
}

export interface IAnswerOfQuestion{
    id: string;
    content: string;
    // mark: number;
}

export interface IQuestion{
    id: string;
    content: string;
    answerLst: IAnswerOfQuestion[];
    pickedAnswer: string | null;
}