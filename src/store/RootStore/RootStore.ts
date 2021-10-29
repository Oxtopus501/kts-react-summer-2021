import { action, makeObservable, observable } from "mobx";

import ApiStore from "./ApiStore";

const BASE_URL = "https://api.github.com";

export default class RootStore {
  readonly apiStore = new ApiStore(BASE_URL);

  inputValue: string = "";

  constructor() {
    makeObservable(this, {
      inputValue: observable,
      setInputValue: action,
    });
  }

  setInputValue(value: string): void {
    this.inputValue = value;
  }
}
