import { U as Utils, D as Color } from "./mermaid.core.DAir4i3l.js";
const channel = (color, channel2) => {
  return Utils.lang.round(Color.parse(color)[channel2]);
};
export {
  channel as c
};
