import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"补充综合测试","description":"","frontmatter":{"title":"补充综合测试","tags":["exam","tricky","review"],"difficulty":"medium","review":"2026-04-28T00:00:00.000Z"},"headers":[],"relativePath":"exams/addition-review.md","filePath":"exams/addition-review.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "exams/addition-review.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AdditionReviewPaper = resolveComponent("AdditionReviewPaper");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "补充综合测试",
      tabindex: "-1"
    }, [
      createTextVNode("补充综合测试 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#补充综合测试",
        "aria-label": 'Permalink to "补充综合测试"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "这是一套补充综合测试，适合在复习完相关章节后集中自测。", -1)),
    createVNode(_component_AdditionReviewPaper)
  ]);
}
const additionReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  additionReview as default
};
