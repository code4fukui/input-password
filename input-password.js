import { InputAlpha } from "https://code4fukui.github.io/input-alpha/input-alpha.js";

class InputPassword extends InputAlpha {
  constructor(opts) {
    super(opts);
    this.inp.type = "password";
  }
}

customElements.define("input-password", InputPassword);

export { InputPassword };
