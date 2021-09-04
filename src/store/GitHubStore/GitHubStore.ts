import ApiStore from "../../shared/store/ApiStore";
import { ApiResponse, HTTPMethod } from "../../shared/store/ApiStore/types";
import {
  GetOrganizationReposListParams,
  IGitHubStore,
  RepoItem,
} from "./types";

const BASE_URL = "https://api.github.com";

class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore(BASE_URL);

  // TODO: реализовать интерфейс IGitHubStore

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/orgs/${params.organizationName}/repos`,
    });
  }
}

export default GitHubStore;
