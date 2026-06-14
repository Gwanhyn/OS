import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-4TB4RGXK.CZbDR4iw.js";
import { _ as __name } from "./mermaid.core.CEB8Xc_N.js";
import "./chunk-FMBD7UC4.x5F1x84D.js";
import "./chunk-YZCP3GAM.3lT4-u3g.js";
import "./chunk-55IACEB6.Dq3PUYku.js";
import "./chunk-EDXVE4YY.Ci-ttrUM.js";
import "./framework.DGrgC4bd.js";
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
