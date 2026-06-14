import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode, w as withCtx, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.DGrgC4bd.js";
const _imports_0 = "/OS_Learning/assets/image-20260611095135381.BUU09cIj.png";
const _imports_1 = "/OS_Learning/assets/image-20260611100507871.CeKBiL6j.png";
const _imports_2 = "/OS_Learning/assets/image-20260611102657265.QPdIjQKJ.png";
const _imports_3 = "/OS_Learning/assets/image-20260611100841274.EZJuMVXI.png";
const _imports_4 = "/OS_Learning/assets/image-20260611102724461.Cw0On_Ut.png";
const _imports_5 = "/OS_Learning/assets/image-20260611100924196.hqXA_D3y.png";
const _imports_6 = "/OS_Learning/assets/image-20260611105836662.DUpnK-zV.png";
const _imports_7 = "/OS_Learning/assets/image-20260611110352505.C-LhdSWX.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"文件系统/7_2 文件系统实现方式.md","filePath":"文件系统/7_2 文件系统实现方式.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "文件系统/7_2 文件系统实现方式.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  const _component_Reveal = resolveComponent("Reveal");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 91)),
    createVNode(_component_QuizSet, { collection: "final-review" }),
    _cache[2] || (_cache[2] = createStaticVNode("", 3)),
    createVNode(_component_Reveal, { title: "答案解析" }, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "连续文件结构"),
              createTextVNode("：大文件在磁盘上连续存放，顺序访问只需一次寻道，读写效率极高。")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "索引文件结构"),
              createTextVNode("：通过索引表可以直接定位到任意数据块的位置，无需遍历链表，随机访问效率最高。")
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              createBaseVNode("strong", null, "链接文件结构"),
              createTextVNode("：不要求连续磁盘空间，可以充分利用零散的空闲块，磁盘空间利用率最高。")
            ])
          ])
        ], -1),
        createBaseVNode("p", null, "来源：2025 期末考试，九。", -1)
      ])]),
      _: 1
    })
  ]);
}
const _7_2_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _7_2_________ as default
};
