import { o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, k as unref, g as withBase, ai as createStaticVNode } from "./chunks/framework.DGrgC4bd.js";
const _hoisted_1 = { class: "os-home-hero" };
const _hoisted_2 = ["src"];
const __pageData = JSON.parse('{"title":"OS_Learning","description":"","frontmatter":{"title":"OS_Learning","tags":["index"],"difficulty":"overview","review":"2026-04-26T00:00:00.000Z"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1781416353000}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", {
          id: "os-learning",
          tabindex: "-1"
        }, [
          createTextVNode("OS_Learning "),
          createBaseVNode("a", {
            class: "header-anchor",
            href: "#os-learning",
            "aria-label": 'Permalink to "OS_Learning"'
          }, "​")
        ], -1)),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("img", {
            class: "os-home-hero__logo",
            src: unref(withBase)("/logo-round.png"),
            alt: "OS_Learning logo"
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
