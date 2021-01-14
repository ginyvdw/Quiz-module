const initialState = {
  id: 0,
  name: "",
  ranking: 0,
  byIds: []
};

export function addRanking (state = initialState, action: any) {
  const { id, name, ranking } = action.payload;
  return {
    ...state,
    id: id,
    name: name,
    ranking: ranking
  }
}

export function allRanking (state = initialState, action: any) {
  const { id, name, ranking } = action.payload;
  return {
    ...state,
    byIds: {
      ...state.byIds,
      [id]: {
        name,
        ranking
      }
    }
  }
}