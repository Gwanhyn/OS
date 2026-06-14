import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-3.BfY4VpxM.png";
const _imports_1 = "/OS_Learning/assets/image-2.Cr0OMwkM.png";
const _imports_2 = "/OS_Learning/assets/image-1.Cgqrqi6Y.png";
const __pageData = JSON.parse('{"title":"==请求式分页系统==","description":"","frontmatter":{},"headers":[],"relativePath":"内存管理/3_5 请求式分页系统.md","filePath":"内存管理/3_5 请求式分页系统.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "内存管理/3_5 请求式分页系统.md" };
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.781ex",
  height: "1.52ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -661 345 672",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.652ex",
  height: "0.271ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -120 1172 120",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_6 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.09ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.509ex",
  height: "1.312ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -540 667 580",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[13] || (_cache[13] = createStaticVNode("", 6)),
    createBaseVNode("p", null, [
      createBaseVNode("mjx-container", _hoisted_1, [
        (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mi" }, [
                createBaseVNode("path", {
                  "data-c": "1D456",
                  d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "i")
          ])
        ], -1))
      ])
    ]),
    _cache[14] || (_cache[14] = createStaticVNode("", 6)),
    createBaseVNode("ul", null, [
      _cache[6] || (_cache[6] = createBaseVNode("li", null, "调入什么：OS核心部分、正在运行的用户进程相关程序和数据", -1)),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("何时调入：OS在系统启动时调入；用户程序取决于调入策略（预调页，按需调页，", -1)),
        createBaseVNode("mjx-container", _hoisted_3, [
          (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[2] || (_cache[2] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mo" }, [
                  createBaseVNode("path", {
                    "data-c": "2026",
                    d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60ZM525 60Q525 84 542 102T585 120Q609 120 627 104T646 61Q646 36 629 18T586 0T543 17T525 60ZM972 60Q972 84 989 102T1032 120Q1056 120 1074 104T1093 61Q1093 36 1076 18T1033 0T990 17T972 60Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          _cache[3] || (_cache[3] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("mo", null, "…")
            ])
          ], -1))
        ]),
        _cache[5] || (_cache[5] = createTextVNode("）", -1))
      ]),
      _cache[7] || (_cache[7] = createBaseVNode("li", null, "如何调入：缺页错误处理机制", -1))
    ]),
    _cache[15] || (_cache[15] = createStaticVNode("", 11)),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createBaseVNode("strong", null, "驻留集：", -1)),
      _cache[11] || (_cache[11] = createTextVNode(" 虚拟存储系统中，每个进程驻留在内存的页面集合，或进程分到的物理页框集合 （工作集 ", -1)),
      createBaseVNode("mjx-container", _hoisted_5, [
        (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[8] || (_cache[8] = [
          createBaseVNode("g", {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": "0",
            transform: "scale(1,-1)"
          }, [
            createBaseVNode("g", { "data-mml-node": "math" }, [
              createBaseVNode("g", { "data-mml-node": "mo" }, [
                createBaseVNode("path", {
                  "data-c": "2208",
                  d: "M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z",
                  style: { "stroke-width": "3" }
                })
              ])
            ])
          ], -1)
        ])])),
        _cache[9] || (_cache[9] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mo", null, "∈")
          ])
        ], -1))
      ]),
      _cache[12] || (_cache[12] = createTextVNode(" 驻留集）", -1))
    ]),
    _cache[16] || (_cache[16] = createStaticVNode("", 50)),
    createVNode(_component_QuizSet, { collection: "final-review" })
  ]);
}
const _3_5________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _3_5________ as default
};
