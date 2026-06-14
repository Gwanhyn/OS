import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const __pageData = JSON.parse('{"title":"程序运行基本过程","description":"","frontmatter":{},"headers":[],"relativePath":"OS Boot/3_0 程序运行基本过程.md","filePath":"OS Boot/3_0 程序运行基本过程.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "OS Boot/3_0 程序运行基本过程.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 36)),
    createVNode(_component_QuizSet, {
      collection: "boot",
      title: "程序运行基本过程练习",
      description: "覆盖程序/进程区别、可执行文件装入、缺页异常、输出路径和系统调用。",
      "question-ids": [
        "boot-program-01",
        "boot-program-02",
        "boot-program-03",
        "boot-program-04",
        "boot-program-05",
        "boot-program-06"
      ]
    })
  ]);
}
const _3_0_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _3_0_________ as default
};
