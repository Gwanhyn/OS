import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"存储管理","description":"","frontmatter":{},"headers":[],"relativePath":"内存管理/3_1存储管理.md","filePath":"内存管理/3_1存储管理.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "内存管理/3_1存储管理.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 37)),
    createVNode(_component_QuizSet, {
      collection: "memory",
      title: "存储管理基础练习",
      description: "覆盖存储抽象、内存分配、覆盖与交换等基础判断。",
      "question-ids": [
        "memory-storage-01",
        "memory-storage-02",
        "memory-storage-03",
        "memory-storage-04",
        "memory-storage-05",
        "memory-storage-06",
        "memory-storage-07",
        "memory-storage-08",
        "memory-storage-09",
        "memory-storage-10"
      ]
    })
  ]);
}
const _3_1____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _3_1____ as default
};
