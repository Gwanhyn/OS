import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-20260609175014500.BvTozt1a.png";
const _imports_1 = "/OS_Learning/assets/image-20260610073727751.Bp7b7dGo.png";
const _imports_2 = "/OS_Learning/assets/image-20260610074546284.B1aKQVgM.png";
const _imports_3 = "/OS_Learning/assets/image-20260610075411663.igEtBp9i.png";
const _imports_4 = "/OS_Learning/assets/image-20260610081652489.BBv3WEZc.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"IO管理/5_4 IO缓冲管理.md","filePath":"IO管理/5_4 IO缓冲管理.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "IO管理/5_4 IO缓冲管理.md" };
const _hoisted_1 = {
  tabindex: "0",
  class: "MathJax",
  jax: "SVG",
  display: "true",
  style: { "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "22.723ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 10043.7 1000",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "16.091ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 7112.1 1000",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[6] || (_cache[6] = createStaticVNode("", 9)),
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
          createBaseVNode("mi", null, "a"),
          createBaseVNode("mi", null, "n"),
          createBaseVNode("mi", null, "s"),
          createBaseVNode("mo", null, "="),
          createBaseVNode("mi", null, "M"),
          createBaseVNode("mi", null, "a"),
          createBaseVNode("mi", null, "x"),
          createBaseVNode("mo", { stretchy: "false" }, "("),
          createBaseVNode("mi", null, "C"),
          createBaseVNode("mo", null, ","),
          createBaseVNode("mi", null, "T"),
          createBaseVNode("mo", { stretchy: "false" }, ")"),
          createBaseVNode("mo", null, "+"),
          createBaseVNode("mi", null, "M")
        ])
      ], -1))
    ]),
    _cache[7] || (_cache[7] = createBaseVNode("p", null, "MT不能并行是因为都需要读写缓冲区，发生读写冲突", -1)),
    _cache[8] || (_cache[8] = createBaseVNode("p", null, "CM不能并行是因为都由CPU执行", -1)),
    _cache[9] || (_cache[9] = createBaseVNode("hr", null, null, -1)),
    _cache[10] || (_cache[10] = createBaseVNode("h3", {
      id: "双缓冲-double-buffer",
      tabindex: "-1"
    }, [
      createTextVNode("双缓冲(double buffer) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#双缓冲-double-buffer",
        "aria-label": 'Permalink to "双缓冲(double buffer)"'
      }, "​")
    ], -1)),
    _cache[11] || (_cache[11] = createBaseVNode("p", null, [
      createBaseVNode("img", {
        src: _imports_1,
        alt: ""
      })
    ], -1)),
    _cache[12] || (_cache[12] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "核心："),
      createTextVNode("分配两个缓冲区，尽可能让CPU和外设都能连续处理二无需等待对方，CPU处理速度和外设接近时效果比较好（即相比于单缓冲允许MT并行）")
    ], -1)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("双缓冲时，系统处理一块数据的时间可以粗略认为是 ", -1)),
      createBaseVNode("mjx-container", _hoisted_3, [
        (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[2] || (_cache[2] = [
          createStaticVNode("", 1)
        ])])),
        _cache[3] || (_cache[3] = createBaseVNode("mjx-assistive-mml", {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, [
          createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
            createBaseVNode("mi", null, "M"),
            createBaseVNode("mi", null, "a"),
            createBaseVNode("mi", null, "x"),
            createBaseVNode("mo", { stretchy: "false" }, "("),
            createBaseVNode("mi", null, "M"),
            createBaseVNode("mo", null, "+"),
            createBaseVNode("mi", null, "C"),
            createBaseVNode("mo", null, ","),
            createBaseVNode("mi", null, "T"),
            createBaseVNode("mo", { stretchy: "false" }, ")")
          ])
        ], -1))
      ]),
      _cache[5] || (_cache[5] = createTextVNode(" （M与C、T都可以并行）", -1))
    ]),
    _cache[13] || (_cache[13] = createStaticVNode("", 17)),
    createVNode(_component_QuizSet, { collection: "io" })
  ]);
}
const _5_4_IO____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _5_4_IO____ as default
};
