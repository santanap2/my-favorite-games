export const convertDate = (date: Date) => {
  const newDate = new Date(date)
  const day = String(newDate.getDate()).padStart(2, '0')
  const month = String(newDate.getMonth() + 1).padStart(2, '0')
  const year = String(newDate.getFullYear())
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}

export const convertFullDate = (date: Date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_Paulo',
  })
}
