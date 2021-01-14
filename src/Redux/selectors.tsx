export const getRankingsState = (store: any) => {
    store.allRanking;
}

// export const getRankingList = (store: any) => {
//     getRankingsState(store).byIds
// }

// export const getRankingById = (store: any, id: number) => {
//     getRankingsState(store) ? { ...getRankingsState(store).byIds[id], id }: {};
// }

// export const getRankings = (store: any) => {
//     getRankingList(store).map((id: number) => getRankingById(store, id));
// }