export const gamesGenres = [
  { camelCaseName: 'actionAdventure', name: 'Ação e aventura' },
  { camelCaseName: 'rpgOpenWorld', name: 'RPG de mundo aberto' },
  { camelCaseName: 'rpgTurnBased', name: 'RPG de turnos' },
  { camelCaseName: 'actionTerror', name: 'Ação e terror' },
  { camelCaseName: 'fps', name: 'Tiro em primeira pessoa' },
  { camelCaseName: 'survivalHorror', name: 'Survival Horror' },
  { camelCaseName: 'racing', name: 'Corrida' },
  { camelCaseName: 'actionRhythm', name: 'Ação e ritmo' },
]

export const defineInputName = (name: string) => {
  switch (name) {
    case 'rpgOpenWorld':
      return 'rpgOpenWorld'

    case 'rpgTurnBased':
      return 'rpgTurnBased'

    case 'actionTerror':
      return 'actionTerror'

    case 'fps':
      return 'fps'

    case 'survivalHorror':
      return 'survivalHorror'

    case 'racing':
      return 'racing'

    case 'actionRhythm':
      return 'actionRhythm'

    case 'metroidvania':
      return 'metroidvania'

    default:
      return 'actionAdventure'
  }
}
