const onListingFetch = () => {
  return {
    type: 'GET_LISTINGS'
  }
}

const onListingSet = (data) => ({
  type: 'GET_LISTINGS_SUCCESS',
  payload: data
})

export {
  onListingFetch,
  onListingSet
}