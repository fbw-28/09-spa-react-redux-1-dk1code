const initialState = {
    "x": 10,
    "y": 13
}

export const Reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "incrementX":
      return {...state, x:state.x + action.payload};
    case "incrementY":
      return { ...state, y: state.y + action.payload };
    default:
      return state;
  }
};
