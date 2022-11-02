export interface ListTypeRepository {
  create: () => Promise<any>
  update: () => Promise<any>
  del: () => Promise<any>
  findAll: () => Promise<any>
  findById: () => Promise<any>
  findAllById: () => Promise<any>
}
