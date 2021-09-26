export type GetOrganizationReposListParams = {
  organizationName: string;
};

export interface IReposListStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<void>;
}
