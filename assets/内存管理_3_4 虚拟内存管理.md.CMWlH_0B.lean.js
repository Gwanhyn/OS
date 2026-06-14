import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"虚拟内存管理","description":"","frontmatter":{},"headers":[],"relativePath":"内存管理/3_4 虚拟内存管理.md","filePath":"内存管理/3_4 虚拟内存管理.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "内存管理/3_4 虚拟内存管理.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 28)),
    createVNode(_component_QuizSet, {
      collection: "memory",
      title: "虚拟内存管理练习",
      description: "覆盖局部性原理、虚拟存储特征、Cache 对比和关键实现问题。",
      "question-ids": [
        "memory-virtual-01",
        "memory-virtual-02",
        "memory-virtual-03",
        "memory-virtual-04",
        "memory-virtual-05",
        "memory-virtual-06",
        "memory-virtual-07",
        "memory-virtual-08",
        "memory-virtual-09",
        "memory-virtual-10",
        "memory-virtual-11",
        "memory-virtual-12"
      ]
    })
  ]);
}
const _3_4_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _3_4_______ as default
};
