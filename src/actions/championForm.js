export const updateChampionFormData = championFormData => {
  return {
    type: 'UPDATED_DATA',
    championFormData
  }
}

export const resetChampionForm = () => {
  return {
    type: "RESET_CHAMPION_FORM",

  }
}