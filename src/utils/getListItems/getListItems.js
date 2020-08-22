export const getListItems = (params) => {
  const items = params.includes('items') ? params.split('=')[1].split(',') : []

  return items.map((y) => {
    const decodedItem = decodeURIComponent(y)
    return decodedItem.charAt(0).toUpperCase() + decodedItem.substr(1)
  })
}
