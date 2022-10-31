export interface ListEntity {
  id: number
  idLogin: string
  idListTypeAux: number
}

export interface ListType {
  id: number
  type: string
}

export interface ListTypeAuxEntity {
  idList: number
  idListType: number
}

export interface ListItems {
  id: number
  idList: number
  description: string
  text: string
}

export interface ListItemsPhoto {
  id: number
  idListItems: number
  photo: string
}
