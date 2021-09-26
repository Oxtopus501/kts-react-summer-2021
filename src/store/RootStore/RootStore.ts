import ApiStore from "./ApiStore";

const BASE_URL = "https://api.github.com";

export default class RootStore {
  readonly apiStore = new ApiStore(BASE_URL);
}
