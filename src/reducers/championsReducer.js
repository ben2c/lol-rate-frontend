const initialState =
{
  champions: [],
  currentUser: "",
  userChampions: [],
  championOwnerships: [],
  isLoading: false,

}


export default (state = initialState, action) => {

  switch (action.type) {

    case 'LOADING':
      return {
        ...state,
        isLoading: true
      }
    case "GET_ALL_CHAMPIONS_SUCCESS":
      return {
        ...state,
        champions: action.champions,
        isLoading: false
      }

    case "GET_CHAMPION_OWNERSHIPS_SUCCESS":
      return {
        ...state,
        championOwnerships: action.championOwnerships,
      }

    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user,
      }

    case "GET_USER_CHAMPIONS_SUCCESS":
      let myChampions = action.user.champions.map(t => {
        t.claimed = "true"
        return t
      })
      return {
        ...state,
        userChampions: myChampions
      }

    case "MARK_AS_CLAIMED":
      let newArray = [...state.champions];
      let userChampions = [...state.userChampions]

      newArray.forEach(t => {
        t.claimed = "false"
        userChampions.map(champion => {
          if (t.id === champion.id) {
            t.claimed = "true";
          }

          return t
        })
      })

      return {
        ...state,
        champions: newArray,
      }

    case "ADD_CHAMPION_OWNERSHIP_SUCCESS":
      let newChampion = action.champion
      newChampion.claimed = "true"
      let newList = [...state.champions]

      newList.forEach(t => {
        if (t.id === newChampion.id) {
          t.claimed = "true"
          t.users.push(action.user)

        }
      })

      return {
        ...state,
        championOwnerships: [...state.championOwnerships, action.championOwnership],
        userChampions: [...state.userChampions, newChampion],
        champions: newList
      }

    case "REMOVE_CHAMPION_OWNERSHIP_SUCCESS":
      let updateChampions = [...state.champions]

      updateChampions.forEach(t => {
        if (t.id === action.champion.id) {
          t.claimed = "false"
          t.users.splice(t.users.indexOf(action.user), 1)
        }
      })

      return {
        ...state,
        championOwnerships: state.championOwnerships.filter(to => to.id !== action.championOwnership.id),
        userChampions: state.userChampions.filter(t => t.id !== action.champion.id),
        champions: updateChampions,
      }


    case "CREATE_CHAMPION_SUCCESS":
      return {
        ...state,
        champions: [...state.champions, action.champion]
      }



    default:
      return state
  }
}