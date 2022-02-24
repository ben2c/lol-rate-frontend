// Synchronous action creators
export const setChampionOwnerships = (championOwnerships) => {
  return {
    type: 'GET_CHAMPION_OWNERSHIPS_SUCCESS',
    championOwnerships

  }
}

export const setChampionOwnership = (championOwnership, user, champion) => {
  return {
    type: "ADD_CHAMPION_OWNERSHIP_SUCCESS",
    championOwnership,
    user,
    champion

  }
}

export const removeChampionOwnership = (championOwnership, user, champion) => {
  return {
    type: "REMOVE_CHAMPION_OWNERSHIP_SUCCESS",
    championOwnership,
    user,
    champion

  }
}


export const getChampionOwnerships = () => {

  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/champion_ownerships/`,
      {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      .then(r => r.json())
      .then(champion_ownerships => {
        console.log("champion_ownerships", champion_ownerships)
        if (champion_ownerships.error) {
          alert(champion_ownerships.error)
        } else {

          dispatch(setChampionOwnerships(champion_ownerships))

        }
      })
  }
}


export const claimChampion = (champion, user) => {
  const newData = {
    user_id: user.id,
    champion_id: champion.id
  }
  console.log("newData", newData)

  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/champion_ownerships/`,
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      })

      .then(r => r.json())
      .then(championOwnership => {
        dispatch(setChampionOwnership(championOwnership, user, champion))

      })

  }
}

export const unclaimChampion = (to, champion, user) => {
  let selectedChampionOwnership = to.find(to => (to.user_id === user.id && to.champion_id === champion.id))
  console.log("to.id", selectedChampionOwnership.id)


  return dispatch => {

    return fetch(`http://localhost:3000/api/v1/champion_ownerships/${selectedChampionOwnership.id}`,
      {
        credentials: "include",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })

      .then(r => r.text())
      .then(championOwnership => {
        console.log(championOwnership)


        dispatch(removeChampionOwnership(selectedChampionOwnership, user, champion))

      })


  }
}