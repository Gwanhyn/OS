import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, ai as createStaticVNode, E as createVNode } from "./chunks/framework.CvIu6D-n.js";
const __pageData = JSON.parse('{"title":"Boot 与启动","description":"","frontmatter":{},"headers":[],"relativePath":"OS Boot/2_0 Boot.md","filePath":"OS Boot/2_0 Boot.md","lastUpdated":1781415925000}');
const _sfc_main = { name: "OS Boot/2_0 Boot.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuizSet = resolveComponent("QuizSet");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createStaticVNode("", 55)),
    createVNode(_component_QuizSet, {
      collection: "boot",
      title: "Boot 与启动练习",
      description: "覆盖 Bootloader、MIPS 启动、x86 BIOS/MBR、GRUB 和内核接管控制权。",
      "question-ids": [
        "boot-sequence-01",
        "boot-sequence-02",
        "boot-sequence-03",
        "boot-sequence-04",
        "boot-sequence-05",
        "boot-sequence-06",
        "boot-sequence-07",
        "boot-sequence-08"
      ]
    })
  ]);
}
const _2_0_Boot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _2_0_Boot as default
};
