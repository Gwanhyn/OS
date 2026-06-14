import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const __pageData = JSON.parse('{"title":"学习进度","description":"","frontmatter":{"title":"学习进度","tags":["review"],"difficulty":"dashboard","review":"2026-04-26T00:00:00.000Z"},"headers":[],"relativePath":"progress.md","filePath":"progress.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "progress.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ProgressDashboard = resolveComponent("ProgressDashboard");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "学习进度",
      tabindex: "-1"
    }, [
      createTextVNode("学习进度 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#学习进度",
        "aria-label": 'Permalink to "学习进度"'
      }, "​")
    ], -1)),
    createVNode(_component_ProgressDashboard)
  ]);
}
const progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  progress as default
};
