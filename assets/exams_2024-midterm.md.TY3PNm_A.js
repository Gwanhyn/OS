import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.DGrgC4bd.js";
const __pageData = JSON.parse('{"title":"2024 期中考试","description":"","frontmatter":{"title":"2024 期中考试","tags":["exam","midterm"],"difficulty":"medium","review":"2026-04-28T00:00:00.000Z"},"headers":[],"relativePath":"exams/2024-midterm.md","filePath":"exams/2024-midterm.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "exams/2024-midterm.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ExamPaper2024 = resolveComponent("ExamPaper2024");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "_2024-期中考试",
      tabindex: "-1"
    }, [
      createTextVNode("2024 期中考试 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#_2024-期中考试",
        "aria-label": 'Permalink to "2024 期中考试"'
      }, "​")
    ], -1)),
    createVNode(_component_ExamPaper2024),
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "原卷-pdf",
      tabindex: "-1"
    }, [
      createTextVNode("原卷 PDF "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#原卷-pdf",
        "aria-label": 'Permalink to "原卷 PDF"'
      }, "​")
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", { href: "./2024-midterm-v2.1.pdf" }, "打开 PDF")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("原文件："),
        createBaseVNode("code", null, "2024期中考试v2.1.pdf")
      ]),
      createBaseVNode("li", null, "规格：8 页，A4，约 955 KiB")
    ], -1))
  ]);
}
const _2024Midterm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _2024Midterm as default
};
