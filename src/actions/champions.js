import { resetChampionForm } from "./championForm"
import { getChampionOwnerships } from "./championOwnerships"

// Synchronous Actions Creators 
// Action creators create actions which are plain objects 
// Actions are dispatched to the store
// the store invokes reducers 
// reducers generate new state 
export const fetchChampionsSuccess = champions => {
  return {
    type: "GET_ALL_CHAMPIONS_SUCCESS",
    champions
  }
}

export const addChampion = champion => {
  return {
    type: "CREATE_CHAMPION_SUCCESS",
    champion
  }
}

// Asynchronous Action Creators 
// If a function (e.g. a thunk) is dispatched, redux-thunk calls that function, passing in the store's dispatch and getState. 
// The middleware intercepts the thunk so it does not go directly to the reducer 
// When that async fetch resolves,the callback can dispatch a normal action to the store. 
export const getAllChampions = () => {
  //thunk is function returned by another function
  //this allows dispatch of actions inside the returned function
  return dispatch => {
    dispatch({ type: "LOADING" })

    //fetch returns a promise we are waiting to resolve
    return (
      fetch("http://localhost:3000/api/v1/champions", {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        //when resolved, parse response data to JSON
        .then(r => r.json())
        //dispatch action to set champions and send to reducer to update state
        .then(champions => {
          dispatch(fetchChampionsSuccess(champions));
          dispatch(getChampionOwnerships());
          dispatch({ type: "LOADED" });
        })
        //if Promise is rejected
        .catch(error => {
          console.log("Error: ", error);
          dispatch({ type: "ERROR" });
        })
    )
  }
};

//Asynchronous action creators
export const createChampion = champion => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/champions", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(champion)
    })
      .then(r => r.json())
      .then(champion => {
        dispatch(addChampion(champion));
        dispatch(resetChampionForm());
      });
  }
}