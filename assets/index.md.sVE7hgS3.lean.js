import { o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, k as unref, g as withBase, ai as createStaticVNode } from "./chunks/framework.CvIu6D-n.js";
const _hoisted_1 = { class: "os-home-hero" };
const _hoisted_2 = ["src"];
const __pageData = JSON.parse('{"title":"OS","description":"","frontmatter":{"title":"OS","tags":["index"],"difficulty":"overview","review":"2026-04-26T00:00:00.000Z"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1781417280000}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", {
          id: "os",
          tabindex: "-1"
        }, [
          createTextVNode("OS "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#os",
            "aria-label": 'Permalink to "OS"'
          }, "​")
        ], -1)),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("img", {
            class: "os-home-hero__logo",
            src: unref(withBase)("/logo-round.png"),
            alt: "OS logo"
          }, null, 8, _hoisted_2),
          _cache[0] || (_cache[0] = createStaticVNode("", 1))
        ]),
        _cache[2] || (_cache[2] = createStaticVNode("", 5))
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
