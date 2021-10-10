export const INITIAL_STATE = {
  listings: [],
  isLoading: false,
  hasError: false
}

const propertyReducer = (state, action ) => {
  switch(action.type) {
    case 'GET_LISTINGS':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case 'GET_LISTINGS_SUCCESS':
      return {
        ...state,
        listings: state.listings.concat(action.payload)
      }
    default:
      return state
  }
}

export default propertyReducer