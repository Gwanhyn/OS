import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const _imports_0 = "/OS/assets/image-20260610082358986.6vOMlEye.png";
const _imports_1 = "/OS/assets/image-20260610082830109.D7NmQ4ZZ.png";
const _imports_2 = "/OS/assets/image-20260610082840332.Dhvi0ZmE.png";
const _imports_3 = "/OS/assets/image-20260610082934637.ML5JUcow.png";
const _imports_4 = "/OS/assets/image-20260610092025574.DVhmYcwW.png";
const _imports_5 = "/OS/assets/image-20260610091147494.Dx-_1wM7.png";
const _imports_6 = "/OS/assets/image-20260610101813030.BaUZTntI.png";
const _imports_7 = "/OS/assets/image-20260610102732971.DNWYRf6q.png";
const _imports_8 = "/OS/assets/image-20260610103429718.DReGJeq6.png";
const _imports_9 = "/OS/assets/image-20260610103620006.DNtYLnSp.png";
const _imports_10 = "/OS/assets/image-20260610103727667.DeTIpyXY.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"IO管理/5_5 IO设备管理与性能问题.md","filePath":"IO管理/5_5 IO设备管理与性能问题.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "IO管理/5_5 IO设备管理与性能问题.md" };
const _hoisted_1 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.74ex",
  height: "1.075ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -317.4 327 475.2",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.357ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "0.964ex",
  height: "0.723ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -161.8 425.9 319.6",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode("", 30)),
    createBaseVNode("ul", null, [
      _cache[7] || (_cache[7] = createBaseVNode("li", null, "输入井、输出井：在磁盘上的两个大存储空间，模拟磁盘设备，用于暂存数据", -1)),
      _cache[8] || (_cache[8] = createBaseVNode("li", null, "输入缓冲区、输出缓冲区：缓存交互数据", -1)),
      createBaseVNode("li", null, [
        _cache[4] || (_cache[4] = createTextVNode("输入进程SP", -1)),
        createBaseVNode("mjx-container", _hoisted_1, [
          (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
            createStaticVNode("", 1)
          ])])),
          _cache[1] || (_cache[1] = createBaseVNode("mjx-assistive-mml", {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("msub", null, [
                createBaseVNode("mi"),
                createBaseVNode("mi", null, "i")
              ])
            ])
          ], -1))
        ]),
        _cache[5] || (_cache[5] = createTextVNode("和输出进程SP", -1)),
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
              createBaseVNode("msub", null, [
                createBaseVNode("mi"),
                createBaseVNode("mi", null, "o")
              ])
            ])
          ], -1))
        ]),
        _cache[6] || (_cache[6] = createTextVNode("：模拟脱机I/O时的外围控制机", -1))
      ])
    ]),
    _cache[10] || (_cache[10] = createStaticVNode("", 39)),
    createVNode(_component_QuizSet, { collection: "io" })
  ]);
}
const _5_5_IO_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _5_5_IO_________ as default
};
