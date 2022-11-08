export interface LoginDeleteUseCaseContract {
  execute: (id: string) => Promise<boolean>
}
