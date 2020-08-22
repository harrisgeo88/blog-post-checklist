export const getListItems = (params) => {
  const items = params.includes('items')
    ? decodeURIComponent(params).split('=')[1].split(',')
    : []

  return items.map((item) => {
    return item.charAt(0).toUpperCase() + item.substr(1)
  })
}
