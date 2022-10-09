export interface IItem {
  name: string
  image: string
}

export type ShowType = 'Rick' | 'Harry'

export interface IButton {
  type: ShowType
  active: boolean
}
