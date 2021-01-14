import { ADD_RANKING } from "../rankingTypes";

let nextTodoId = 0;

export const addRanking = (name: string, ranking: number) => ({
    type: ADD_RANKING,
    payload: {
        id: ++nextTodoId,
        name: name,
        ranking: ranking
    }
})