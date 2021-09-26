export interface IRepoItemStore {
  getRepoById(id: string): Promise<void>;
}
