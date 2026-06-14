import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"引言","description":"","frontmatter":{},"headers":[],"relativePath":"OS Boot/1_0 引言.md","filePath":"OS Boot/1_0 引言.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "OS Boot/1_0 引言.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 38)),
    createVNode(_component_QuizSet, {
      collection: "boot",
      title: "操作系统引论练习",
      description: "覆盖 OS 定义、抽象、分时系统、中断/陷阱、虚拟特征和机制/策略分离。",
      "question-ids": [
        "boot-intro-01",
        "boot-intro-02",
        "boot-intro-03",
        "boot-intro-04",
        "boot-intro-05",
        "boot-intro-06"
      ]
    })
  ]);
}
const _1_0___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _1_0___ as default
};
