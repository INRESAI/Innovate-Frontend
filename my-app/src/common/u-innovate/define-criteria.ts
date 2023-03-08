export interface ICriteria {
    criteriaId: string,
    name: string,
    description: string,
    type: string,
    isAnswered: boolean,
    numberOfQuestion: number,
    numberOfAnswered: number,
}
export interface GetCriteriaRequest {
    token: string,
    type: string,
}