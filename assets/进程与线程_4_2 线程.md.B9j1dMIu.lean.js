import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-1.xQ7SJKtQ.png";
const _imports_1 = "/OS_Learning/assets/image-2.BeiK-9Ra.png";
const __pageData = JSON.parse('{"title":"线程","description":"","frontmatter":{},"headers":[],"relativePath":"进程与线程/4_2 线程.md","filePath":"进程与线程/4_2 线程.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "进程与线程/4_2 线程.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 45)),
    createVNode(_component_QuizSet, {
      collection: "process",
      title: "线程练习",
      description: "覆盖线程引入、用户级线程、内核级线程和混合实现方式。",
      "question-ids": [
        "process-thread-02",
        "process-thread-03",
        "process-thread-04",
        "process-thread-05",
        "process-thread-06",
        "process-thread-07",
        "process-thread-08",
        "process-thread-09"
      ]
    })
  ]);
}
const _4_2___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _4_2___ as default
};
