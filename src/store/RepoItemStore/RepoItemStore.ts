import { Meta } from "@utils/meta";
import { ILocalStore } from "@utils/useLocalStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import {
  normalizeRepoItem,
  RepoItemApi,
  RepoItemModel,
} from "../models/gitHub/repoItem";
import rootStore from "../RootStore";
import ApiStore from "../RootStore/ApiStore";
import { ApiResponse, HTTPMethod } from "../RootStore/ApiStore/types";
import { IRepoItemStore } from "./types";

const BASE_URL = "https://api.github.com";

type PrivateFields = "_repo" | "_meta";

export default class RepoItemStore implements ILocalStore, IRepoItemStore {
  private readonly _apiStore = rootStore.apiStore;

  private _repo: RepoItemModel | null = null;
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<RepoItemStore, PrivateFields>(this, {
      _repo: observable.ref,
      _meta: observable,
      repo: computed,
      meta: computed,
      getRepoById: action,
    });
  }

  get repo(): RepoItemModel | null {
    return this._repo;
  }

  get meta(): Meta {
    return this._meta;
  }

  async getRepoById(id: string): Promise<void> {
    this._meta = Meta.loading;
    this._repo = null;
    const response = await this._apiStore.request<RepoItemApi>({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/repositories/${id}`,
    });

    runInAction(() => {
      if (!response.success) {
        this._meta = Meta.error;
      }
      try {
        this._meta = Meta.success;
        this._repo = normalizeRepoItem(response.data);
        return;
      } catch {
        this._meta = Meta.error;
        this._repo = null;
      }
    });
  }

  destroy() {
    //destroy
  }
}
