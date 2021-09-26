import { RepoItemApi } from "../models/gitHub/repoItem";
import rootStore from "../RootStore/";
import { ApiResponse, HTTPMethod } from "../RootStore/ApiStore/types";
import { GetOrganizationReposListParams, IGitHubStore } from "./types";

class GitHubStore implements IGitHubStore {
  private readonly apiStore = rootStore.apiStore;

  // TODO: реализовать интерфейс IGitHubStore

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItemApi[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/orgs/${params.organizationName}/repos`,
    });
  }

  async getRepoById(id: string): Promise<ApiResponse<RepoItemApi, any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/repositories/${id}`,
    });
  }
}

export default GitHubStore;
