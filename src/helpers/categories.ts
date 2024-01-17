import { ICategory } from '@/interfaces'

export const sortCategoriesByName = (categories: ICategory[]) => {
  if (categories) {
    const copy = [...categories]
    const result = copy.sort((a, b) => {
      const nomeA = a.namePt.toLowerCase()
      const nomeB = b.namePt.toLowerCase()
      if (nomeA.toLowerCase() < nomeB.toLowerCase()) {
        return -1
      } else if (nomeA > nomeB) {
        return 1
      } else {
        return 0
      }
    })
    return result
  }

  return categories
}
