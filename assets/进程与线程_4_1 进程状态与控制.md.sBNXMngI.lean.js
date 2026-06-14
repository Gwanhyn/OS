import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image.DmH4S2NK.png";
const __pageData = JSON.parse('{"title":"进程状态与控制","description":"","frontmatter":{},"headers":[],"relativePath":"进程与线程/4_1 进程状态与控制.md","filePath":"进程与线程/4_1 进程状态与控制.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "进程与线程/4_1 进程状态与控制.md" };
const _hoisted_1 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.017ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "100.172ex",
  height: "3.165ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -949.5 44276.1 1399",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 9)),
    createBaseVNode("mjx-container", _hoisted_1, [
      (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
        createStaticVNode("", 1)
      ])])),
      _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
        unselectable: "on",
        display: "block",
        style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" }
      }, [
        createBaseVNode("math", {
          xmlns: "http://www.w3.org/1998/Math/MathML",
          display: "block"
        }, [
          createBaseVNode("mi", { mathvariant: "normal" }, "进"),
          createBaseVNode("mi", { mathvariant: "normal" }, "程"),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "1")
          ]),
          createBaseVNode("mi", { mathvariant: "normal" }, "和"),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "2")
          ]),
          createBaseVNode("mi", { mathvariant: "normal" }, "并"),
          createBaseVNode("mi", { mathvariant: "normal" }, "发"),
          createBaseVNode("mi", { mathvariant: "normal" }, "执"),
          createBaseVNode("mi", { mathvariant: "normal" }, "行"),
          createBaseVNode("mi", { mathvariant: "normal" }, "可"),
          createBaseVNode("mi", { mathvariant: "normal" }, "复"),
          createBaseVNode("mi", { mathvariant: "normal" }, "现"),
          createBaseVNode("mo", { stretchy: "false" }, "⇔"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("mi", null, "R"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "2")
          ]),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", { "data-mjx-texclass": "OP" }, "⋂"),
          createBaseVNode("mi", null, "W"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "1")
          ]),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mi", { mathvariant: "normal" }, "∅"),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", null, "∧"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("mi", null, "R"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "1")
          ]),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", { "data-mjx-texclass": "OP" }, "⋂"),
          createBaseVNode("mi", null, "W"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "2")
          ]),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mi", { mathvariant: "normal" }, "∅"),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("mo", null, "∧"),
          createBaseVNode("mi", null, "W"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "1")
          ]),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", { "data-mjx-texclass": "OP" }, "⋂"),
          createBaseVNode("mi", null, "W"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("msub", null, [
            createBaseVNode("mi", null, "S"),
            createBaseVNode("mn", null, "2")
          ]),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mi", { mathvariant: "normal" }, "∅"),
          createBaseVNode("mo", { stretchy: "false" }, ")")
        ])
      ], -1))
    ]),
    _cache[3] || (_cache[3] = createStaticVNode("", 17)),
    createVNode(_component_QuizSet, {
      collection: "process",
      title: "进程状态与控制练习",
      description: "覆盖进程引入、PCB、状态转换、挂起和进程控制原语。",
      "question-ids": [
        "process-state-control-01",
        "process-state-control-02",
        "process-state-control-03",
        "process-state-control-04",
        "process-state-control-05",
        "process-state-control-06",
        "process-state-control-07",
        "process-state-control-08",
        "process-state-control-09",
        "process-state-control-10",
        "process-state-control-11",
        "process-state-control-12",
        "process-state-control-13",
        "process-state-control-14",
        "process-state-control-15"
      ]
    })
  ]);
}
const _4_1________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _4_1________ as default
};
