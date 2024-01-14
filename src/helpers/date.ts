export const convertDate = (date: Date) => {
  const newDate = new Date(date)
  const day = String(newDate.getDate()).padStart(2, '0')
  const month = String(newDate.getMonth() + 1).padStart(2, '0')
  const year = String(newDate.getFullYear())
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}
