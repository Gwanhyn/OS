import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.CIJGrECM.js";
import { _ as __name } from "./mermaid.core.DAir4i3l.js";
import "./chunk-FMBD7UC4.D7Qnm-yj.js";
import "./chunk-YZCP3GAM.cCjNiP3R.js";
import "./chunk-55IACEB6.CZ3109PU.js";
import "./chunk-EDXVE4YY.CRWk6hMy.js";
import "./framework.CvIu6D-n.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
