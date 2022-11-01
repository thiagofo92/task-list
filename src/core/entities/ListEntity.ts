export interface ListEntity {
  id?: number
  idLogin: string
  description: string
}

export interface ListTypeEntity {
  id: number
  type: string
}

export interface ListTypeAuxEntity {
  idList: number
  idListType: number
}

export interface ListItemsEntity {
  id: number
  idList: number
  description: string
  text: string
}

export interface ListItemsPhotoEntity {
  id: number
  idListItems: number
  photo: string
}
