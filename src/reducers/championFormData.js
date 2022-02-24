const initialState = {
  name: '',
  lane: '',
  url: '',
  users: []
}


export default (state = initialState, action) => {

  switch (action.type) {
    case "UPDATED_DATA":
      return action.championFormData

    case "RESET_CHAMPION_FORM":
      return initialState;

    default:
      return state;
  }
}